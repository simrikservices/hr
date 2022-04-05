export default {
  name: "candidate",
  title: "Candidate",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "author",
      title: "Author",
      type: "string",
    },
    {
      name: "post_date",
      title: "Post Date",
      type: "string",
    },
    {
      name: "address",
      title: "Address",
      type: "string",
    },
    {
      name: "city",
      title: "City",
      type: "string",
    },
    {
      name: "phone",
      title: "Phone",
      type: "string",
    },
    {
      name: "sex",
      title: "Sex",
      type: "string",
    },
    {
      name: "ex",
      title: "Ex Occupation",
      type: "string",
    },
    {
      name: "marts",
      title: "Martial Arts",
      type: "string",
    },
    {
      name: "education",
      title: "Education",
      type: "string",
    },
    {
      name: "height",
      title: "Height",
      type: "string",
    },
    {
      name: "keyskills",
      title: "Key Skills",
      type: "string",
    },
    {
      name: "content",
      title: "About",
      type: "blockContent",
    },
    {
      name: "featured_image",
      title: "Image Name",
      type: "string",
    },
    {
      name: "photo",
      title: "Photo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "country",
      title: "Country",
      type: "string",
    },
    {
      name: "fathername",
      title: "Father Name",
      type: "string",
    },
    {
      name: "mothername",
      title: "Mother Name",
      type: "string",
    },
    {
      name: "citizenshipno",
      title: "Cintizenship No.",
      type: "string",
    },
    {
      name: "passportno",
      title: "Passport No",
      type: "string",
    },
    {
      name: "passportissuedfrom",
      title: "Passport Issud From",
      type: "string",
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },
    {
      name: "languages",
      title: "Languages",
      type: "array",
      of: [{ type: "reference", to: { type: "language" } }],
    },

    {
      name: "bloodgroup",
      title: "Blood Group",
      type: "string",
    },
  ],
};
