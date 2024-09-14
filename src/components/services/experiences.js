export async function getExperiences() {
  try {
    const response = await fetch("http://127.0.0.1:7000/experiences");

    if (!response.ok) {
      throw new Error("Failed to fetch experiences");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.log("Error fetching experiences", error);
  }
}
