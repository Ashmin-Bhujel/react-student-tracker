import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Student } from "@/types";

type FilterProps = {
  filterOption: "all" | Student["gender"] | "none";
  filteredStudentsCount: number;
  onFilterOptionChange: (value: string) => void;
};

export default function Filter({
  filterOption,
  filteredStudentsCount,
  onFilterOptionChange,
}: FilterProps) {
  // Normal values
  const genders: ("all" | Student["gender"])[] = [
    "all",
    "male",
    "female",
    "other",
    "unspecified",
  ];

  return (
    <Select onValueChange={onFilterOptionChange} value={filterOption}>
      <SelectTrigger className="w-full max-w-48">
        <SelectValue placeholder="Select a filter" />
      </SelectTrigger>
      <SelectContent position="popper">
        <SelectGroup>
          <SelectLabel>Gender</SelectLabel>
          {genders.map((gender) => (
            <SelectItem key={gender} value={gender}>
              <span className="capitalize">{gender}</span>
              {filterOption === gender && (
                <span>({filteredStudentsCount})</span>
              )}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
