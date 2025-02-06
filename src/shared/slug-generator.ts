const generateSlug = (phoneName: string): string => {
  return phoneName
    .toLowerCase() // Convert to lowercase
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/[^\w\-]+/g, "") // Remove non-alphanumeric characters (except hyphen)
    .replace(/\-\-+/g, "-") // Replace multiple hyphens with one
    .replace(/^-+/, "") // Remove hyphen from the beginning
    .replace(/-+$/, ""); // Remove hyphen from the end
};

export default generateSlug;
