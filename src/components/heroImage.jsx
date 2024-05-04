import heroImage from '../assets/view-3d-space-rocket-model.jpg'

export const HeroImage = () => {
  return (
    <div>
      <img
        className="w-[800px] mx-auto rounded-2xl mt-5 bg-opacity-[0.5]"
        src={heroImage}
      />
    </div>
  );
};
