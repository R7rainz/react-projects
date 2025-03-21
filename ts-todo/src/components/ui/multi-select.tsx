"use client"

import * as React from "react"
import { useMemo, useState } from "react"
import { Check, ChevronsUpDown, Plus } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Badge } from "@/components/ui/badge"
import { useLocalStorage } from "../../hooks/useLocalStorage"

export type Option = {
  id: string
  value: string
  label: string
}

type MultiSelectProps = {
  options: Option[]
  selected: Option[]
  onChange: (options: Option[]) => void
  placeholder?: string
  isCreatable?: boolean
}

export function MultiSelect({
  options,
  selected,
  onChange,
  placeholder = "Select options...",
  isCreatable = false,
}: MultiSelectProps) {
  const [open, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState("")

  const handleSelect = (option: Option) => {
    if (selected.some((item) => item.value === option.value)) {
      onChange(selected.filter((item) => item.value !== option.value))
    } else {
      onChange([...selected, option])
    }
  }

  const handleCreate = () => {
    if (inputValue && !options.some((option) => option.label.toLowerCase() === inputValue.toLowerCase())) {
      const newOption = { id: inputValue, value: inputValue.toLowerCase(), label: inputValue }
      onChange([...selected, newOption])
      setInputValue("")
    }
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-full justify-between">
          {selected.length > 0 ? (
            <div className="flex flex-wrap gap-1">
              {selected.map((option) => (
                <Badge key={option.value} variant="secondary">
                  {option.label}
                </Badge>
              ))}
            </div>
          ) : (
            placeholder
          )}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search options..." value={inputValue} onValueChange={setInputValue} />
          <CommandList>
            <CommandEmpty>
              {isCreatable && inputValue ? (
                <Button variant="outline" className="w-full justify-start" onClick={handleCreate}>
                  <Plus className="mr-2 h-4 w-4" />
                  Create "{inputValue}"
                </Button>
              ) : (
                "No options found."
              )}
            </CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem key={option.value} onSelect={() => handleSelect(option)}>
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selected.some((item) => item.value === option.value) ? "opacity-100" : "opacity-0",
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export default function App() {
  // ⏬ Load tags from localStorage
  const [tags, setTags] = useLocalStorage<Option[]>("TAGS", [])
  console.log("📌 Stored Tags from Local Storage:", tags)

  // ⏬ Memoize available tags
  const availableTags = useMemo(() => {
    console.log("📌 Available Tags in App:", tags)
    return tags
  }, [tags])

  // ✅ Function to add a new tag and save it to localStorage
  const onAddTag = (newTag: Option) => {
    console.log("➕ Adding New Tag:", newTag)

    setTags(prevTags => {
      const exists = prevTags.some(tag => tag.value === newTag.value)
      if (!exists) {
        const updatedTags = [...prevTags, newTag]
        console.log("✅ Updated Tags:", updatedTags)
        return updatedTags
      }
      console.log("⚠️ Tag already exists, skipping addition.")
      return prevTags
    })
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Tag Selector</h1>
      <MultiSelect
        options={availableTags}
        selected={[]}
        onChange={onAddTag}
        placeholder="Select or create tags..."
        isCreatable={true}
      />
    </div>
  )
}
