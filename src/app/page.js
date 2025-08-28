import { StoryblokCMS } from "@/utils/cms";
import { notFound } from "next/navigation";
import { StoryblokStory } from '@storyblok/react/rsc';

export async function generateMetadata() {
  return StoryblokCMS.generateMetaFromStory("home");
}

export default async function StartPage({}) {
  try {
    const currentStory = await StoryblokCMS.getStory({ slug: ["home"] });
    if (!currentStory) throw new Error();
    console.log(currentStory.content);
    return <StoryblokStory story={currentStory} />;
  } catch (error) {
    notFound();
  }
}