"use client"

import { type FormEvent, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MultiSelect } from "@/components/ui/multi-select"

type Tag = {
  id: string
  label: string
}

type NoteData = {
  title: string
  markdown: string
  tags: Tag[]
}

type NoteFormProps = {
  onSubmit: (data: NoteData) => void
}

export default function NoteForm({ onSubmit }: NoteFormProps) {
  const router = useRouter()
  const titleRef = useRef<HTMLInputElement>(null)
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const [selectedTags, setSelectedTags] = useState<Tag[]>([])

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    onSubmit({
      title: titleRef.current!.value,
      markdown: textAreaRef.current!.value,
      tags: selectedTags,
    })
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Create New Note</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" ref={titleRef} required className="w-full" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tags">Tags</Label>
              <MultiSelect
                id="tags"
                value={selectedTags}
                onChange={setSelectedTags}
                options={[]}
                isCreatable
                placeholder="Select or create tags..."
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
        </form>
      </CardContent>
      <CardFooter className="flex justify-end space-x-4">
        <Button variant="outline" onClick={() => router.back()}>
          Cancel
        </Button>
        <Button type="submit" onClick={handleSubmit}>
          Save
        </Button>
      </CardFooter>
    </Card>
  )
}

