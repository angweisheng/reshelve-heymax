"use client"
import BookReel from "@/components/BookReel"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"

const Page = () => {
    return (
        <MaxWidthWrapper>
        <div>
            <BookReel query={{}} title="Listed Books" />
        </div>
        </MaxWidthWrapper>

            
        )
} 

export default Page