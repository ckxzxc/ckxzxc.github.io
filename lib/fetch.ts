
import { sanityClient } from "sanity:client";

export async function fetchCollectionMetas() {
  return await sanityClient.fetch(`*[_type == "exerciseCollection"]{
    title,
    slug,
    level,
    description,
    relatedCategory->{
      title,
      slug,
      description
    }
  }`);
}

export async function fetchCollectionBySlug(slug:string) {
  return await sanityClient.fetch(
    `*[_type == "exerciseCollection" && slug.current == $slug][0]{
      ...,
      relatedCategory->{
        title,
        slug
      }
    }`,
    { slug }
  );
}

export async function fetchExerciseMetas(subSlug:string) {
  return await sanityClient.fetch(
    `*[_type == "exercise" && relatedCollection->slug.current == $slug] | order(index asc){
      index,
      title,
      slug,
      relatedCollection->{
        title,
        slug,
        relatedCategory->{
          title,
          slug
        }
      }
    }`,
    { slug: subSlug }
  );
}

export async function fetchExerciseBySlug(slug: string) {
  return await sanityClient.fetch(
    `*[_type == "exercise" && slug.current == $slug][0]{
      ...,
      templateABC { asset->{url} },
      solutionABC { asset->{url} },
      hintABC { asset->{url} },
      relatedCollection->{
        title,
        slug,
        relatedCategory->{
          title,
          slug
        }
      }
    }`,
    { slug }
  );
}

export async function fetchAllExercises() {


    return await sanityClient.fetch(
      `*[_type == "exercise"] | order(index asc){
        _type,
        index,
        slug,
        relatedCollection->{
          title,
          slug,
          relatedCategory->{
            title,
            slug
          }
        }
      }`);
}