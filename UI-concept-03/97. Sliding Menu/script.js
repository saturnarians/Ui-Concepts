const root = document.documentElement;
const items = Array.from(document.querySelectorAll("li"));
root.style.setProperty('--active', 0);

items.forEach((item, index) => 
{
	if(index === 0) item.setAttribute("data-active", true);
	item.style.setProperty('--i', index);
	
  	item.addEventListener("click", e => 
	{
		root.style.setProperty('--active', index);
		root.querySelectorAll("[data-active]").forEach(el => el.removeAttribute("data-active"));
    	item.setAttribute("data-active", true);
  	});
});
