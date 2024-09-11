// Function to remove an item at a specific index
export const removeItemAtIndex = (index: number, items: any[]) => {
  // Create a new array without mutating the original state
  const updatedItems = [...items]; // Make a copy of the array
  updatedItems.splice(index, 1); // Remove item at the specified index

  // Return the state with the new array
  return updatedItems;
};
