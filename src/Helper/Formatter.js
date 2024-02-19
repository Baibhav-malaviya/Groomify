export const formatCurrency = (num) => {
  const formattedNumber = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(num);
  return formattedNumber;
};

export function formatName(inputName) {
  // Check if the input is a valid string
  if (typeof inputName !== "string") {
    return "Invalid input";
  }

  // Split the name based on spaces or hyphens
  const words = inputName.split(/[ ]/);

  // Capitalize each word
  const formattedName = words
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");

  return formattedName;
}
