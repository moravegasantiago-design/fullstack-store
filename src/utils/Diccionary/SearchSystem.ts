import type { ProductType } from "@/App";
import type { SystemSearchFn } from "@/caja-componentes/Header";
import type { Dispatch, SetStateAction } from "react";
type SuggestionProps = {
  event: string;
  SetListSuggestion: Dispatch<SetStateAction<[string, number][]>>;
  SetSuggestionInput: Dispatch<SetStateAction<boolean>>;
  SystemSearch: SystemSearchFn;
  product: ProductType[];
};
export const SystemOfSuggestion = (props: SuggestionProps) => {
  const {
    event,
    SetListSuggestion,
    SetSuggestionInput,
    SystemSearch,
    product,
  } = props;
  if (!event.trim()) {
    SetListSuggestion([]);
    SetSuggestionInput(false);
    return;
  }
  const Filter = SystemSearch({ eventClick: event, array: product });
  SetListSuggestion(Filter);
  SetSuggestionInput(Filter.length ? true : false);
};

type searchProps = {
  SetOption: Dispatch<SetStateAction<string>>;
  SetProductFilter: Dispatch<SetStateAction<ProductType[]>>;
  product: ProductType[];
  InputValue: string;
  SetSuggestionInput: Dispatch<SetStateAction<boolean>>;
};
export const SearchSystem = (props: searchProps) => {
  const {
    SetOption,
    SetProductFilter,
    product,
    InputValue,
    SetSuggestionInput,
  } = props;
  if (!InputValue.trim()) return;
  SetSuggestionInput(false);
  SetOption(InputValue);
  const filterSearch = product.filter(
    (p) =>
      p.tags.includes(InputValue.trim().toLowerCase()) ||
      p.name.includes(InputValue.trim().toLowerCase())
  );
  SetProductFilter(filterSearch);
};
