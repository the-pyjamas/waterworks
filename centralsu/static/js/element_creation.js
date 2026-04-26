function li_element_creation(content, nav_class, target_link) {
	/*
    Represents to adding or create a new `li` tag
    inside a ul. Each `li` contains `a` tag link
    which represents to a new item of the navbar.
    The `set-attribute` calls to set `href` attribute for the link.

    Arguments:
        content (string): The content that `li` `a` contains (e.g. Home, About us, or Contact.).
		nav_class (string): Represents to the header navbar selector class (the UL or NAV).
        link_address (string): The address of the created link which will set for `href` value.
    */
	let header_navbar_selector = "." + nav_class;
	let header_navbar = document.querySelector(header_navbar_selector);

	let li_node = document.createElement("li");
	let link_node = document.createElement("a");
	let node_content = document.createTextNode(content.toUpperCase());

	li_node.appendChild(link_node);
	link_node.appendChild(node_content);
	link_node.setAttribute("href", target_link);

	header_navbar.appendChild(li_node);
}

li_element_creation("Home", "header-nav", "/");
li_element_creation("Posts", "header-nav", "/blog/");
console.log("HELLO WORLD");
