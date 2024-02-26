import { CustomInput } from "./select/CustomInput";
import { CustomSelect } from "./select/CustomSelect";

interface ProductFilterProps {
  filter: { query: string; sort: string };
  setFilter: Function;
}

export const ProductFilter: React.FC<ProductFilterProps> = ({
  filter,
  setFilter,
}: {
  filter: { query: string; sort: string };
  setFilter: Function;
}) => {
  return (
    <div>
      <CustomInput
              value={ filter.query }
              onChange={ (e: React.ChangeEvent<HTMLInputElement>) => setFilter({ ...filter, query: e.target.value }) }
              placeholder="Searching..."
              onSearch={ (value) => console.log(value) } type={ "" }      />
      <CustomSelect
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="Sort By"
        options={[
          { value: "title", name: "Title" },
          { value: "price", name: "Price" },
          { value: "brand", name: "Brand" },
        ]}
      />
    </div>
  );
};
