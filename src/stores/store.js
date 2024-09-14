import { create } from "zustand";

const useExperienceStore = create((set) => ({
  experiences: [],
  isLoading: false,
  error: null,

  fetchExperiences: async () => {
    set({ isLoading: true });

    try {
      const response = await fetch("http://127.0.0.1:7000/experiences");

      const data = await response.json();

      set({ experiences: data.reverse(), isLoading: false, error: null });
    } catch (error) {
      console.log("Error fetching experiences", error);
      set({ error: error.message, isLoading: false });
    }
  },

  addExperience: async (experience) => {
    set({ isLoading: true });

    try {
      const response = await fetch("http://127.0.0.1:7000/experiences", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(experience),
      });

      const { id } = await response.json();

      set((state) => ({
        experiences: [...state.experiences, { ...experience, id }],
        isLoading: false,
        error: null,
      }));
    } catch (error) {
      console.log("Error adding experience", error);
      set({ error: error.message, isLoading: false });
    }
  },

  deleteExperience: async (id) => {
    set({ isLoading: true });

    try {
      await fetch(`http://127.0.0.1:7000/experiences/${id}`, {
        method: "DELETE",
      });

      set((state) => ({
        experiences: state.experiences.filter(
          (experience) => experience.id !== id,
        ),

        isLoading: false,
        error: null,
      }));
    } catch (error) {
      console.log("Error deleting experience", error);
      set({ error: error.message, isLoading: false });
    }
  },
}));

// const useStore = create((set) => ({
//   bears: 0,
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
//   updateBears: (newBears) => set({ bears: newBears }),
// }));

// function BearCounter() {
//   const bears = useStore((state) => state.bears);
//   return <h1>{bears} around here...</h1>;
// }

// function Controls() {
//   const increasePopulation = useStore((state) => state.increasePopulation);
//   return <button onClick={increasePopulation}>one up</button>;
// }

export { useExperienceStore };
