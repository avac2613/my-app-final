'use client'

import { useState, useTransition } from 'react'
import { Button } from './ui/button'

export function LikeButton({
  id,
  initialLikes,
}: {
  id: string
  initialLikes: number
}) {
  const [likes, setLikes] = useState(initialLikes)
  const [isPending, startTransition] = useTransition()

  return (
    <Button
      variant="outline"
      disabled={isPending}
      onClick={() => {
        startTransition(() => {
          setLikes((currentLikes) => currentLikes + 1)
        })
      }}
    >
      {isPending ? '저장 중...' : `♡ 좋아요 ${likes}`}
    </Button>
  )
}
