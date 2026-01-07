import { addObj, RegisterMessage } from "@/utils/Diccionary/loginSystem";
import { AlertCircle, UserPlus, X } from "lucide-react";
import {
  useState,
  type Dispatch,
  type FormEvent,
  type SetStateAction,
} from "react";

type UserProps = {
  SetViewLogin: Dispatch<SetStateAction<boolean>>;
  SetAuth: Dispatch<SetStateAction<boolean>>;
};

const Login = (props: UserProps) => {
  const { SetViewLogin, SetAuth } = props;
  const [systemLogin, SetSystemLogin] = useState<boolean>(false);
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4 overflow-y-auto"
      onClick={() => SetViewLogin(false)}
    >
      <div
        className="w-full max-w-md my-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden relative">
          <button
            className="absolute top-3 right-3 z-10 p-1 hover:bg-gray-100 rounded-lg transition-colors group"
            aria-label="Cerrar"
            onClick={() => SetViewLogin(false)}
          >
            <X className="h-4 w-4 text-gray-400 group-hover:text-gray-600" />
          </button>

          <HeaderLogin systemLogin={systemLogin} />
          <div className="px-6 py-3 sm:px-7 sm:py-3">
            {systemLogin ? (
              <FormRegister SetSystemLogin={SetSystemLogin} />
            ) : (
              <FromLogin SetViewLogin={SetViewLogin} SetAuth={SetAuth} />
            )}
          </div>

          <FooterLogin
            systemLogin={systemLogin}
            SetSystemLogin={SetSystemLogin}
          />
        </div>
      </div>
    </div>
  );
};

const HeaderLogin = (props: { systemLogin: boolean }) => {
  const { systemLogin } = props;
  return (
    <div
      className={`bg-gradient-to-r from-indigo-600 to-purple-600 text-center transition-all duration-300 ${
        systemLogin ? "px-6 py-1 sm:px-7 sm:py-1" : "px-6 py-5 sm:px-7 sm:py-6"
      }`}
    >
      <div
        className={`bg-white rounded-full flex items-center justify-center mx-auto shadow-lg transition-all duration-300 ${
          systemLogin
            ? "w-10 h-10 sm:w-12 sm:h-12 mb-1.5"
            : "w-12 h-12 sm:w-14 sm:h-14 mb-2"
        }`}
      >
        <UserPlus
          className={`text-indigo-600 transition-all duration-300 ${
            systemLogin ? "h-5 w-5 sm:h-6 sm:w-6" : "h-6 w-6 sm:h-7 sm:w-7"
          }`}
        />
      </div>
      <p
        className={`text-indigo-100 font-medium transition-all duration-300 ${
          systemLogin ? "text-xs" : "text-xs sm:text-sm"
        }`}
      >
        {systemLogin ? "Regístrate aquí" : "Inicia sesión en tu cuenta"}
      </p>
    </div>
  );
};

const FromLogin = (props: {
  SetViewLogin: Dispatch<SetStateAction<boolean>>;
  SetAuth: Dispatch<SetStateAction<boolean>>;
}) => {
  const { SetViewLogin, SetAuth } = props;
  const [submitLogin, SetSubmitLogin] = useState<FromProps>({
    email: "",
    password: "",
    condicional: false,
  });
  const [alertInput, SetAlertInput] = useState<boolean>(false);
  const [conditions, SetConditions] = useState<boolean>(false);
  const [passwordStatus, SetPasswordStatus] = useState<number>(0);
  return (
    <form
      className="space-y-2.5 sm:space-y-3"
      onSubmit={async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const checker = RegisterMessage({
          obj: submitLogin,
          SetAlertInput: SetAlertInput,
          SetConditions: SetConditions,
          alertInput: alertInput,
          conditions: conditions,
        });
        if (checker) return;
        try {
          const res = await fetch(
            "https://fullstack-store-qvjr.onrender.com/auth/login",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              credentials: "include",
              body: JSON.stringify({
                email: submitLogin.email,
                password: submitLogin.password,
              }),
            }
          );
          const status = await res.json();
          if (status.success) {
            SetViewLogin(false);
            SetAuth(true);
          } else {
            SetAuth(false);
          }
          SetPasswordStatus(res.status);
        } catch (err) {
          console.error(err);
        }
      }}
    >
      <div>
        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
          Correo electrónico
        </label>
        <input
          type="email"
          placeholder="tu@email.com"
          name="email"
          className="w-full px-3 py-2 sm:px-3.5 sm:py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all duration-200"
          value={submitLogin.email}
          onChange={(event) =>
            addObj({ e: event, SetSubmitLogin: SetSubmitLogin })
          }
        />
      </div>

      <div>
        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
          Contraseña
        </label>
        <input
          type="password"
          name="password"
          placeholder="••••••••"
          className="w-full px-3 py-2 sm:px-3.5 sm:py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all duration-200"
          value={submitLogin.password}
          onChange={(event) =>
            addObj({ e: event, SetSubmitLogin: SetSubmitLogin })
          }
        />
      </div>
      {(alertInput || conditions || passwordStatus === 401) && (
        <span className="flex items-center gap-1.5 text-sm text-red-600 font-medium">
          <AlertCircle className="w-4 h-4" />
          {alertInput && "Faltan credenciales"}
          {conditions && "Acepta Terminos y condiciones"}
          {passwordStatus === 401 && "Credenciales incorrectas"}
        </span>
      )}
      <label className="flex items-start gap-2 cursor-pointer group pt-1">
        <input
          type="checkbox"
          name="condicional"
          className="w-3.5 h-3.5 mt-0.5 rounded border-gray-300 text-indigo-600 focus:ring-2 focus:ring-indigo-500 cursor-pointer"
          onChange={(event) =>
            addObj({ e: event, SetSubmitLogin: SetSubmitLogin })
          }
        />
        <span className="text-xs text-gray-600 group-hover:text-gray-900 transition-colors">
          Acepto los{" "}
          <button
            type="button"
            className="text-indigo-600 hover:text-indigo-700 font-medium"
          >
            términos y condiciones
          </button>
        </span>
      </label>
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-2 sm:py-2.5 rounded-xl hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95 text-sm mt-1"
      >
        Iniciar sesión
      </button>
    </form>
  );
};

type FooterProps = {
  systemLogin: boolean;
  SetSystemLogin: Dispatch<SetStateAction<boolean>>;
};

const FooterLogin = (props: FooterProps) => {
  const { systemLogin, SetSystemLogin } = props;
  return (
    <div className="px-6 py-3 sm:px-7 sm:py-3 bg-gray-50 border-t border-gray-100 text-center">
      <p className="text-xs sm:text-sm text-gray-600">
        {systemLogin ? "¿Ya tienes una cuenta?" : "¿No tienes una cuenta?"}{" "}
        <button
          className={`${
            systemLogin
              ? "text-indigo-600 hover:text-indigo-700 font-semibold transition-colors"
              : "text-blue-600 hover:text-blue-700 font-semibold transition-colors"
          }`}
          onClick={() => SetSystemLogin((Boolean) => !Boolean)}
        >
          {systemLogin ? "Inicia sesión aquí" : "Regístrate aquí"}
        </button>
      </p>
    </div>
  );
};
export type FromProps = {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
  condicional: boolean;
};
export const FormRegister = (props: {
  SetSystemLogin: Dispatch<SetStateAction<boolean>>;
}) => {
  const { SetSystemLogin } = props;
  const [submitRegister, SetSubmitRegister] = useState<FromProps>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    condicional: false,
  });
  const [alertInput, SetAlertInput] = useState<boolean>(false);
  const [conditions, SetConditions] = useState<boolean>(false);
  const [passwordConfirm, SetPasswordConfirm] = useState<boolean>(false);
  const [accountCreated, SetAccountCreated] = useState<number>(0);
  const inputClass =
    "w-full px-3 py-2 sm:px-3.5 sm:py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent focus:bg-white transition-all duration-200";

  const labelClass = "block text-xs sm:text-sm font-medium text-gray-700 mb-1";

  return (
    <form
      className="space-y-2.5 sm:space-y-3"
      onSubmit={async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const checker = RegisterMessage({
          obj: submitRegister,
          SetAlertInput: SetAlertInput,
          SetConditions: SetConditions,
          SetPasswordConfirm: SetPasswordConfirm,
          alertInput: alertInput,
          conditions: conditions,
          passwordConfirm: passwordConfirm,
        });
        if (checker) return;
        const res = await fetch(
          "https://fullstack-store-qvjr.onrender.com/auth/register",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: submitRegister.name,
              email: submitRegister.email,
              password: submitRegister.password,
            }),
          }
        );
        const req = await res.json();
        const status = res.status;
        if (req.success) SetSystemLogin(false);
        SetAccountCreated(status);
      }}
    >
      <div>
        <label className={labelClass}>Nombre completo</label>
        <input
          type="text"
          name="name"
          placeholder="Juan Pérez"
          className={inputClass}
          value={submitRegister.name}
          onChange={(event) =>
            addObj({ e: event, SetSubmitRegister: SetSubmitRegister })
          }
        />
      </div>

      <div>
        <label className={labelClass}>Correo electrónico</label>
        <input
          type="email"
          name="email"
          placeholder="tu@email.com"
          className={inputClass}
          value={submitRegister.email}
          onChange={(event) =>
            addObj({ e: event, SetSubmitRegister: SetSubmitRegister })
          }
        />
      </div>

      <div>
        <label className={labelClass}>Contraseña</label>
        <input
          type="password"
          name="password"
          placeholder="Mínimo 8 caracteres"
          className={inputClass}
          value={submitRegister.password}
          onChange={(event) =>
            addObj({ e: event, SetSubmitRegister: SetSubmitRegister })
          }
        />
      </div>

      <div>
        <label className={labelClass}>Confirmar contraseña</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Repite tu contraseña"
          className={inputClass}
          value={submitRegister.confirmPassword}
          onChange={(event) =>
            addObj({ e: event, SetSubmitRegister: SetSubmitRegister })
          }
        />
      </div>

      <label className="flex items-start gap-2 cursor-pointer group pt-1">
        <input
          type="checkbox"
          name="condicional"
          onChange={(event) =>
            addObj({ e: event, SetSubmitRegister: SetSubmitRegister })
          }
          className="w-3.5 h-3.5 mt-0.5 rounded border-gray-300 text-indigo-600 focus:ring-2 focus:ring-indigo-500 cursor-pointer"
        />
        <span className="text-xs text-gray-600 group-hover:text-gray-900 transition-colors">
          Acepto los{" "}
          <button
            type="button"
            className="text-indigo-600 hover:text-indigo-700 font-medium"
          >
            términos y condiciones
          </button>
        </span>
      </label>
      {(alertInput ||
        conditions ||
        passwordConfirm ||
        accountCreated === 401) && (
        <span className="flex items-center gap-1.5 text-sm text-red-600 font-medium">
          <AlertCircle className="w-4 h-4" />
          {alertInput && "Faltan credenciales"}
          {conditions && "Acepta los terminos"}
          {passwordConfirm && "Las contraseñas no coinciden"}
          {accountCreated === 401 && "Email ya existente"}
        </span>
      )}

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-2 sm:py-2.5 rounded-xl hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95 text-sm mt-1"
      >
        Crear cuenta
      </button>
    </form>
  );
};

export default Login;
