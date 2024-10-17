export const sleep = (ms) => {
  return new Promise((res) => setTimeout(res, ms));
};

export const handleAosRefresh = () => {
  const elements = document.querySelectorAll("[data-aos]");
  elements.forEach((element) => {
    element.classList.add("aos-animate");
  });
};
