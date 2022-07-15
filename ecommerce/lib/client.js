import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "augny57o",
  dataset: "production",
  apiVersion: "2022-06-02",
  useCdn: true,
  token:
    "skaRvVcmQPLxUQcWQSc0P3Z5IkudnbQ1h9KBTCjdhpy3izdiV1laVOh0Ek51OrExXAlPH4rsWPVeBXRHAQzntHokB7FSXR876bgU4EGiwwA2t1lpbJFAumqXG0Wi5UatRdlsXfOf3meZL6Lu8RO9MPebJ60DTxWbPFzXlR22qhkM1RM86vIq",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
