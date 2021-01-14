const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".text-content", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".text-content2", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

document.querySelector("#close").addEventListener("click", () => {
  document.querySelector(".bg-black").style.display = "none";
});

function preview(index) {
  let imgSrc = document.getElementById("thumbnail-" + index).src;
  console.log(imgSrc);
  document.querySelector(".bg-black").style.display = "block";
  document.querySelector(".img-preview").src = imgSrc;
}
