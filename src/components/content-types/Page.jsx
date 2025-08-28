import { StoryblokServerComponent } from "@storyblok/react/rsc";

//Content-type component (acts as template for all pages)
export default function Page({ blok }) {
    return (
        <main className="flex flex-col">
            {blok?.body?.map((blok) => (
                <StoryblokServerComponent blok={blok} key={blok._uid} />
            ))}
        </main>
    )
}