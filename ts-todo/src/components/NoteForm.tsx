import { type FormEvent, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MultiSelect, type Option } from "@/components/ui/multi-select"

type Tag = Option

type NoteData = {
  title: string
  markdown: string
  tags: Tag[]
}

type NoteFormProps = {
  onSubmit: (data: NoteData) => void
}

export default function NoteForm({ onSubmit }: NoteFormProps) {
  const navigate = useNavigate()
  const titleRef = useRef<HTMLInputElement>(null)
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const [selectedTags, setSelectedTags] = useState<Tag[]>([])

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault() //prevents page from reloading

    if (titleRef.current && textAreaRef.current) {
      onSubmit({
        title: titleRef.current.value,
        markdown: textAreaRef.current.value,
        tags: selectedTags,
      })
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Create New Note</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" ref={titleRef} required className="w-full" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tags">Tags</Label>
              <MultiSelect
                options={[]} // You can populate this with existing tags if needed
                selected={selectedTags}
                onChange={setSelectedTags}
                placeholder="Select or create tags..."
                isCreatable
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="markdown">Body</Label>
            <Textarea
              id="markdown"
              ref={textAreaRef}
              required
              className="min-h-[200px]"
              placeholder="Write your note here..."
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end space-x-4">
          <Button variant="outline" type="button" onClick={() => navigate(-1)}>
            Cancel
          </Button>
          <Button type="submit">Save</Button>
        </CardFooter>
      </form>
    </Card>
  )
}

