const App = () => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "App" }, /*#__PURE__*/
    React.createElement(Dashboard, null)));


};

const Dashboard = () => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "Dashboard" }, /*#__PURE__*/
    React.createElement(Header, null), /*#__PURE__*/
    React.createElement(Main, null)));


};

const Header = () => {
  return /*#__PURE__*/(
    React.createElement("header", { className: "Header" }, /*#__PURE__*/
    React.createElement("div", { className: "Content" }, /*#__PURE__*/
    React.createElement(Logo, null), /*#__PURE__*/
    React.createElement(Search, null), /*#__PURE__*/
    React.createElement(Navigation, null))));



};

const Search = () => {
  const handleOnFocus = e => {
    controller(e, "onFocus");
  };

  const handleOnBlur = e => {
    controller(e, "onBlur");
  };

  const controller = (e, hook) => {
    const search = e.currentTarget.parentElement;

    const placeholder = search.querySelector(".Placeholder");
    const placeholderText = placeholder.querySelector("p");

    const input = search.querySelector("input");

    const elements = {
      search: search,
      placeholder: placeholder,
      placeholderText: placeholderText,
      input: input };


    if (hook === "onFocus") modelOnFocus(elements);else
    if (hook === "onBlur") modelOnBlur(elements);
  };

  const modelOnFocus = elements => {
    viewOnFocus(elements);
  };

  const modelOnBlur = elements => {
    if (elements.input.value === "") {
      viewOnBlur(elements);
    }
  };

  const viewOnFocus = ({ placeholder, placeholderText }) => {
    const tl = gsap.timeline();

    tl.to(placeholder, {
      duration: 0,
      opacity: 0,
      x: -60 });


    tl.to(placeholderText, {
      duration: 0,
      opacity: 0 });


    tl.to(placeholder, {
      duration: 0,
      opacity: 1 });

  };

  const viewOnBlur = ({ placeholder, placeholderText }) => {
    const tl = gsap.timeline();

    tl.to(placeholder, {
      duration: 0,
      opacity: 0,
      x: 0 });


    tl.to(placeholder, {
      duration: 0,
      opacity: 1 });


    tl.to(placeholderText, {
      duration: 0,
      opacity: 1 });

  };

  return /*#__PURE__*/(
    React.createElement("div", { className: "Search" }, /*#__PURE__*/
    React.createElement("div", { className: "Placeholder" }, /*#__PURE__*/
    React.createElement("i", { className: "fas fa-search" }), /*#__PURE__*/
    React.createElement("p", null, "Search")), /*#__PURE__*/

    React.createElement("input", {
      type: "text",
      className: "Input",
      onFocus: handleOnFocus,
      onBlur: handleOnBlur })));



};

const Navigation = () => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "Navigation" },
    icons.map(icon => {
      return /*#__PURE__*/(
        React.createElement("svg", {
          key: icon.id,
          className: icon.id + " Icon",
          "aria-label": icon.ariaLabel,
          height: "22",
          width: "22",
          viewBox: "0 0 48 48" }, /*#__PURE__*/

        React.createElement("path", { d: icon.path })));


    }), /*#__PURE__*/

    React.createElement("img", {
      className: "Profile Icon",
      src: "./assets/MSK Icon.png",
      alt: "Profile" })));



};

const Main = () => {
  return /*#__PURE__*/(
    React.createElement("main", { className: "Main", activescreen: "Home" }, /*#__PURE__*/
    React.createElement(Home, null)));


};

const Home = () => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "Home" }, /*#__PURE__*/
    React.createElement("div", { className: "Stories_Posts" }, /*#__PURE__*/
    React.createElement(Stories, null), /*#__PURE__*/
    React.createElement(Posts, null)), /*#__PURE__*/

    React.createElement(Aside, null)));


};

const Stories = () => {
  // Handlers

  const handleStoryLoad = e => {
    const story = e.currentTarget.parentElement.parentElement;

    const data = {
      story: story,
      status: story.getAttribute("status"),
      user: story.querySelector(".User"),
      circle: story.querySelector("circle"),
      gradientOne: story.querySelector(".gradientOne"),
      gradientTwo: story.querySelector(".gradientTwo") };


    modelOnLoad(data);
  };

  const handleStoryClick = e => {
    const story = e.currentTarget;

    const data = {
      story: story,
      image: story.querySelector(".ImageWrapper"),
      user: story.querySelector(".User"),
      status: story.getAttribute("status"),
      circle: story.querySelector("circle"),
      gradientOne: story.querySelector(".gradientOne"),
      gradientTwo: story.querySelector(".gradientTwo") };


    modelStoryClick(data);
  };

  const handleArrowClick = e => {
    const arrow = e.currentTarget.classList[0];
    modelArrowClick(arrow);
  };

  // Models

  const modelOnLoad = data => {
    if (data.status === "new") viewStoryNew(data);else
    viewStorySeen(data);
  };

  const modelStoryClick = data => {
    viewStoryClick(data);
  };

  const modelArrowClick = arrow => {
    if (arrow === "Left") viewScrollLeft();else
    viewScrollRight();
  };

  // Views

  const viewStoryNew = ({ gradientOne, gradientTwo }) => {
    gradientOne.setAttribute("stop-color", "#c82e8f");
    gradientTwo.setAttribute("stop-color", "#fa9c4b");
  };

  const viewStorySeen = ({ user, circle, gradientOne, gradientTwo }) => {
    user.style.color = "rgb(179, 179, 179)";
    circle.setAttribute("stroke-width", "0");
    gradientOne.setAttribute("stop-color", "#dbdbdb");
    gradientTwo.setAttribute("stop-color", "#dbdbdb");
  };

  const viewStoryClick = data => {
    const tl = gsap.timeline();

    tl.to(data.circle, {
      duration: 0.4,
      rotate: 480,
      opacity: 0,
      transformOrigin: "center" });


    tl.to(data.image, {
      duration: 0.6,
      delay: -0.4,
      ease: "power3.out",
      scale: 1.1 });


    tl.to(data.image, {
      duration: 0.4,
      delay: -0.2,
      ease: "back.out(4)",
      scale: 1 });


    data.user.style.color = "rgb(179, 179, 179)";
  };

  const viewScrollRight = () => {
    const tl = gsap.timeline();

    tl.to(".Dashboard .Home .Stories .Story", {
      duration: 0.8,
      ease: "back.inOut",
      x: -370 });


    tl.to(".Dashboard .Home .Stories .Scroll .Right", {
      duration: 0.2,
      delay: -0.8,
      ease: "power3.inOut",
      opacity: 0,
      pointerEvents: "none" });


    tl.to(".Dashboard .Home .Stories .Scroll .Right", {
      duration: 0.2,
      ease: "power3.inOut",
      visibility: "hidden",
      pointerEvents: "all" });


    tl.to(".Dashboard .Home .Stories .Scroll .Left", {
      duration: 0,
      delay: -0.4,
      visibility: "visible" });


    tl.to(".Dashboard .Home .Stories .Scroll .Left", {
      duration: 0.2,
      delay: -0.2,
      ease: "power3.inOut",
      opacity: 1 });

  };

  const viewScrollLeft = () => {
    const tl = gsap.timeline();

    tl.to(".Dashboard .Home .Stories .Story", {
      duration: 0.8,
      ease: "back.inOut",
      x: 0 });


    tl.to(".Dashboard .Home .Stories .Scroll .Left", {
      duration: 0.2,
      delay: -0.8,
      ease: "power3.inOut",
      opacity: 0,
      pointerEvents: "none" });


    tl.to(".Dashboard .Home .Stories .Scroll .Left", {
      duration: 0.2,
      ease: "power3.inOut",
      visibility: "hidden",
      pointerEvents: "all" });


    tl.to(".Dashboard .Home .Stories .Scroll .Right", {
      duration: 0,
      delay: -0.4,
      visibility: "visible" });


    tl.to(".Dashboard .Home .Stories .Scroll .Right", {
      duration: 0.2,
      delay: -0.2,
      ease: "power3.inOut",
      opacity: 1 });

  };

  // Render

  return /*#__PURE__*/(
    React.createElement("section", { className: "Stories" }, /*#__PURE__*/
    React.createElement("div", { className: "Scroll" }, /*#__PURE__*/
    React.createElement("i", {
      className: "Left fas fa-chevron-circle-left",
      onClick: handleArrowClick }), /*#__PURE__*/

    React.createElement("i", {
      className: "Right fas fa-chevron-circle-right",
      onClick: handleArrowClick })), /*#__PURE__*/



    React.createElement("ul", null,
    stories.map(story => {
      return /*#__PURE__*/(
        React.createElement("li", {
          className: "Story",
          key: story.user,
          status: story.status,
          onClick: handleStoryClick }, /*#__PURE__*/

        React.createElement("div", { className: "ImageWrapper" }, /*#__PURE__*/
        React.createElement("div", { className: "Border" }, /*#__PURE__*/
        React.createElement("svg", { width: "66", height: "66", viewBox: "0 0 100 100" }, /*#__PURE__*/
        React.createElement("defs", null, /*#__PURE__*/
        React.createElement("linearGradient", {
          id: story.id,
          x1: "0%",
          y1: "0%",
          x2: "0%",
          y2: "100%" }, /*#__PURE__*/

        React.createElement("stop", { offset: "0%", className: "gradientOne" }), /*#__PURE__*/
        React.createElement("stop", { offset: "100%", className: "gradientTwo" }))), /*#__PURE__*/


        React.createElement("circle", {
          cx: "50",
          cy: "50",
          r: "47",
          stroke: "url(#" + story.id + ")",
          strokeWidth: "3.5",
          fill: "none",
          transform: "rotate(50 50 50)" }))), /*#__PURE__*/



        React.createElement("img", {
          className: "Image",
          alt: story.status + " story by " + story.user,
          src: story.img,
          onLoad: handleStoryLoad })), /*#__PURE__*/



        React.createElement("p", { className: "User" }, story.user)));


    }))));



};

const Posts = () => {
  const handleOptionsClick = e => {
    const dots = e.currentTarget;
    viewOptionsClick(dots);
  };

  const handleActionClick = e => {
    const data = {
      icon: e.currentTarget,
      path: e.currentTarget.querySelector("path"),
      action: e.currentTarget.classList[0] };


    modelActionClick(data);
  };

  const modelActionClick = data => {
    if (data.action === "Like") {
      if (data.icon.getAttribute("active") === "true") {
        data.icon.setAttribute("active", "false");
        iconsPost.forEach(icon => {
          if (icon.id === data.action) {
            viewActionLike(data, icon.unactive, "#262626", "false");
          }
        });
      } else {
        data.icon.setAttribute("active", "true");
        iconsPost.forEach(icon => {
          if (icon.id === data.action) {
            viewActionLike(data, icon.active, "#ed4956");
          }
        });
      }
    }
  };

  const viewOptionsClick = dots => {
    const tl = gsap.timeline();

    tl.to(dots.children, {
      duration: 0.3,
      ease: "power3.inOut",
      stagger: 0.1,
      y: -5 });


    tl.to(dots.children, {
      duration: 0.3,
      delay: -0.2,
      ease: "back.out(4)",
      stagger: 0.1,
      y: 0 });

  };

  const viewActionLike = ({ icon, path }, filledPath, fillColor, active) => {
    path.setAttribute("d", filledPath);

    const tl = gsap.timeline();

    tl.to(icon, {
      duration: 0,
      fill: fillColor });


    if (active === undefined) {
      tl.to(icon, {
        duration: 0.4,
        ease: "power3.out",
        scale: 1.2 });


      tl.to(icon, {
        duration: 0.4,
        delay: -0.1,
        ease: "back.out(4)",
        scale: 1 });

    }
  };

  return /*#__PURE__*/(
    React.createElement("section", { className: "Posts" },
    posts.map(post => {
      return /*#__PURE__*/(
        React.createElement("article", { className: "Post", key: post.id }, /*#__PURE__*/
        React.createElement("div", { className: "Header" }, /*#__PURE__*/
        React.createElement("div", { className: "UserInfo" }, /*#__PURE__*/
        React.createElement("div", {
          className: "Image",
          style: { backgroundImage: "url(" + post.author.image + ")" },
          alt: "User" }), /*#__PURE__*/

        React.createElement("a", { href: "#d" }, post.author.username)), /*#__PURE__*/


        React.createElement("div", {
          className: "Options",
          "aria-label": "More options",
          onClick: handleOptionsClick }, /*#__PURE__*/

        React.createElement("div", { className: "Dot" }), /*#__PURE__*/
        React.createElement("div", { className: "Dot" }), /*#__PURE__*/
        React.createElement("div", { className: "Dot" }))), /*#__PURE__*/



        React.createElement("div", {
          className: "Image",
          style: { backgroundImage: "url(" + post.image + ")" } }), /*#__PURE__*/


        React.createElement("div", { className: "PostActivity" }, /*#__PURE__*/
        React.createElement("div", { className: "Actions" }, /*#__PURE__*/
        React.createElement("div", null,
        iconsPost.map(icon => {
          return /*#__PURE__*/(
            React.createElement("svg", {
              key: icon.id,
              className: icon.id + " Icon",
              "aria-label": icon.ariaLabel,
              active: "false",
              onClick: handleActionClick,
              height: "25",
              width: "25",
              viewBox: "0 0 50 50" }, /*#__PURE__*/

            React.createElement("path", { d: icon.unactive })));


        })), /*#__PURE__*/


        React.createElement("svg", {
          className: "Bookmark Icon",
          "aria-label": "Bookmark",
          onClick: handleActionClick,
          height: "26",
          width: "26",
          viewBox: "0 0 48 48" }, /*#__PURE__*/

        React.createElement("path", { d: "M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z" }))), /*#__PURE__*/



        React.createElement("p", { className: "LikedBy" }, "Liked by",
        " ", /*#__PURE__*/
        React.createElement("a", { className: "User", href: "#d" },
        post.likedBy),
        " ", "and ", /*#__PURE__*/
        React.createElement("span", null, "others")), /*#__PURE__*/


        React.createElement("p", { className: "PostDescription" }, /*#__PURE__*/
        React.createElement("a", { className: "User", href: "#d" },
        post.author.username),
        " ",
        post.description, /*#__PURE__*/
        React.createElement("span", { className: "More" }, " ... more")), /*#__PURE__*/


        React.createElement("p", { className: "ViewAllComments" }, "View all comments"), /*#__PURE__*/

        React.createElement("div", { className: "LastComments" },
        post.comments.map(comment => {
          return /*#__PURE__*/(
            React.createElement("div", { className: "LastComment", key: comment.id }, /*#__PURE__*/
            React.createElement("p", { className: "Comment" }, /*#__PURE__*/
            React.createElement("a", { className: "User", href: "#d" },
            comment.author),
            " ",
            comment.comment), /*#__PURE__*/

            React.createElement("svg", {
              className: "Like Icon",
              onClick: handleActionClick,
              "aria-label": "Like comment",
              height: "14",
              width: "14",
              viewBox: "0 0 50 50" }, /*#__PURE__*/

            React.createElement("path", { d: "M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z" }))));



        })))));




    })));


};

const Aside = () => {
  return /*#__PURE__*/(
    React.createElement("section", { className: "Aside" }, /*#__PURE__*/
    React.createElement("div", { className: "Content" }, /*#__PURE__*/
    React.createElement(Profile, null), /*#__PURE__*/
    React.createElement(Suggestions, null), /*#__PURE__*/
    React.createElement(Footer, null))));



};

const Footer = () => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "Footer" },
    links.map(link => {
      return /*#__PURE__*/(
        React.createElement("a", { href: link.href, key: link.id },
        link.name));


    }), /*#__PURE__*/
    React.createElement("p", { className: "Copyright" }, "\xA9 2020 INSTAGRAM FROM FACEBOOK")));


};

const Profile = () => {
  return /*#__PURE__*/(
    React.createElement("article", { className: "MyProfile" }, /*#__PURE__*/
    React.createElement("div", { className: "Image_User_Name" }, /*#__PURE__*/
    React.createElement("div", {
      className: "Image",
      style: {
        backgroundImage: "url(" + user.image + ")" } }), /*#__PURE__*/


    React.createElement("div", { className: "User_Name" }, /*#__PURE__*/
    React.createElement("p", { className: "User" }, user.user), /*#__PURE__*/
    React.createElement("p", { className: "Name" }, user.name))), /*#__PURE__*/



    React.createElement("div", null, /*#__PURE__*/
    React.createElement("p", { className: "Action" }, user.action))));



};

const Suggestions = () => {
  return /*#__PURE__*/(
    React.createElement("article", { className: "Suggestions" }, /*#__PURE__*/
    React.createElement("div", { className: "Title_SeeAll" }, /*#__PURE__*/
    React.createElement("p", { className: "Title" }, "Suggestions For You"), /*#__PURE__*/
    React.createElement("p", { className: "SeeAll" }, "See All")),


    suggestions.map(suggestion => {
      return /*#__PURE__*/(
        React.createElement("div", { className: "Suggestion", key: suggestion.id }, /*#__PURE__*/
        React.createElement("div", { className: "Image_User_Name" }, /*#__PURE__*/
        React.createElement("div", {
          className: "Image",
          style: {
            backgroundImage: "url(" + suggestion.image + ")" } }), /*#__PURE__*/


        React.createElement("div", { className: "User_Name" }, /*#__PURE__*/
        React.createElement("p", { className: "User" }, suggestion.user), /*#__PURE__*/
        React.createElement("p", { className: "Name" }, suggestion.description))), /*#__PURE__*/



        React.createElement("div", null, /*#__PURE__*/
        React.createElement("p", { className: "Action" }, suggestion.action))));



    })));


};

const suggestions = [
{
  id: 1,
  user: "delisande",
  description: "Suggested for you",
  image:
  "https://raw.githubusercontent.com/xlerida/instagram-ui/master/src/assets/stories-img-1.jpg",
  action: "Follow" },

{
  id: 2,
  user: "barone",
  description: "Suggested for you",
  image:
  "https://raw.githubusercontent.com/xlerida/instagram-ui/master/src/assets/stories-img-2.jpg",
  action: "Follow" },

{
  id: 3,
  user: "julinice",
  description: "Suggested for you",
  image:
  "https://raw.githubusercontent.com/xlerida/instagram-ui/master/src/assets/stories-img-3.jpg",
  action: "Follow" },

{
  id: 4,
  user: "gerney",
  description: "Suggested for you",
  image:
  "https://raw.githubusercontent.com/xlerida/instagram-ui/master/src/assets/stories-img-4.jpg",
  action: "Follow" },

{
  id: 5,
  user: "evanyne",
  description: "Suggested for you",
  image:
  "https://raw.githubusercontent.com/xlerida/instagram-ui/master/src/assets/stories-img-5.jpg",
  action: "Follow" }];



const user = {
  user: "xlerida",
  name: "Álex S. Lérida",
  image:
  "https://raw.githubusercontent.com/xlerida/instagram-ui/master/src/assets/IDPXr2NY_400x400.jpg",
  action: "Switch" };


const links = [
{
  id: 1,
  name: "About",
  href: "#d" },

{
  id: 2,
  name: "Help",
  href: "#d" },

{
  id: 3,
  name: "Press",
  href: "#d" },

{
  id: 4,
  name: "API",
  href: "#d" },

{
  id: 5,
  name: "Jobs",
  href: "#d" },

{
  id: 6,
  name: "Privacy",
  href: "#d" },

{
  id: 7,
  name: "Terms",
  href: "#d" },

{
  id: 8,
  name: "Locations",
  href: "#d" },

{
  id: 9,
  name: "Top Accounts",
  href: "#d" },

{
  id: 10,
  name: "Hashtags",
  href: "#d" },

{
  id: 11,
  name: "Language",
  href: "#d" }];



const icons = [
{
  id: "Home",
  ariaLabel: "Home",
  active: "",
  path:
  "M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z" },

{
  id: "Inbox",
  ariaLabel: "Inbox",
  path:
  "M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z" },

{
  id: "Find",
  ariaLabel: "Find People",
  path:
  "M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zm0 45C12.4 45 3 35.6 3 24S12.4 3 24 3s21 9.4 21 21-9.4 21-21 21zm10.2-33.2l-14.8 7c-.3.1-.6.4-.7.7l-7 14.8c-.3.6-.2 1.3.3 1.7.3.3.7.4 1.1.4.2 0 .4 0 .6-.1l14.8-7c.3-.1.6-.4.7-.7l7-14.8c.3-.6.2-1.3-.3-1.7-.4-.5-1.1-.6-1.7-.3zm-7.4 15l-5.5-5.5 10.5-5-5 10.5z" },

{
  id: "Feed",
  ariaLabel: "Activity Feed",
  path:
  "M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z" }];



const stories = [
{
  id: 1,
  img:
  "https://raw.githubusercontent.com/xlerida/instagram-ui/master/src/assets/stories-img-1.jpg",
  user: "delisande",
  status: "new" },

{
  id: 2,
  img:
  "https://raw.githubusercontent.com/xlerida/instagram-ui/master/src/assets/stories-img-2.jpg",
  user: "barone",
  status: "new" },

{
  id: 3,
  img:
  "https://raw.githubusercontent.com/xlerida/instagram-ui/master/src/assets/stories-img-3.jpg",
  user: "julinice",
  status: "new" },

{
  id: 4,
  img:
  "https://raw.githubusercontent.com/xlerida/instagram-ui/master/src/assets/stories-img-4.jpg",
  user: "gerney",
  status: "new" },

{
  id: 5,
  img:
  "https://raw.githubusercontent.com/xlerida/instagram-ui/master/src/assets/stories-img-5.jpg",
  user: "evanyne",
  status: "new" },

{
  id: 6,
  img:
  "https://raw.githubusercontent.com/xlerida/instagram-ui/master/src/assets/stories-img-6.jpg",
  user: "jadnd",
  status: "new" },

{
  id: 7,
  img:
  "https://raw.githubusercontent.com/xlerida/instagram-ui/master/src/assets/stories-img-7.jpg",
  user: "rocice",
  status: "seen" },

{
  id: 8,
  img:
  "https://raw.githubusercontent.com/xlerida/instagram-ui/master/src/assets/stories-img-8.jpg",
  user: "mannean",
  status: "seen" },

{
  id: 9,
  img:
  "https://raw.githubusercontent.com/xlerida/instagram-ui/master/src/assets/stories-img-9.jpg",
  user: "amaria",
  status: "seen" },

{
  id: 10,
  img:
  "https://raw.githubusercontent.com/xlerida/instagram-ui/master/src/assets/stories-img-10.jpg",
  user: "bierwald",
  status: "seen" },

{
  id: 11,
  img:
  "https://raw.githubusercontent.com/xlerida/instagram-ui/master/src/assets/stories-img-11.jpg",
  user: "laena",
  status: "seen" },

{
  id: 12,
  img:
  "https://raw.githubusercontent.com/xlerida/instagram-ui/master/src/assets/stories-img-12.jpg",
  user: "loric",
  status: "seen" }];



const posts = [
{
  id: 1,
  author: {
    username: "xlerida",
    image:
    "https://raw.githubusercontent.com/xlerida/instagram-ui/master/src/assets/IDPXr2NY_400x400.jpg" },


  image:
  "https://raw.githubusercontent.com/xlerida/instagram-ui/master/src/assets/post-1-img.png",

  likedBy: "delisande",
  description: "Instagram dashboard with React",
  comments: [
  {
    id: 1,
    author: "evanyne",
    comment: "😲 So cool" },

  {
    id: 2,
    author: "julinice",
    comment: "Nice job!" }] },



{
  id: 2,
  author: {
    username: "kyliejenner",
    image:
    "https://raw.githubusercontent.com/xlerida/instagram-ui/master/src/assets/post-3-user-img.jpg" },


  image:
  "https://raw.githubusercontent.com/xlerida/instagram-ui/master/src/assets/post-3-img.jpg",

  likedBy: "itsjohnnycyrus",
  description: "check out my new youtube video! all things halloween 🧡",
  comments: [
  {
    id: 1,
    author: "anuheajams",
    comment: "stunning! 🧡✨" },

  {
    id: 2,
    author: "colecarrigan",
    comment: "🌞" }] },



{
  id: 3,
  author: {
    username: "bobdylan",
    image:
    "https://raw.githubusercontent.com/xlerida/instagram-ui/master/src/assets/post-44-user-img.jpg" },


  image:
  "https://raw.githubusercontent.com/xlerida/instagram-ui/master/src/assets/post-44-img.jpg",

  likedBy: "annemarie.levy",
  description: "He not busy being born is busy dying",
  comments: [
  {
    id: 1,
    author: "xlerida",
    comment: "👏" },

  {
    id: 2,
    author: "margaret.freeman.96343",
    comment: "Bob Dylan is so talented" }] },



{
  id: 4,
  author: {
    username: "natgeo",
    image:
    "https://raw.githubusercontent.com/xlerida/instagram-ui/master/src/assets/post-5-user-img.jpg" },


  image:
  "https://raw.githubusercontent.com/xlerida/instagram-ui/master/src/assets/post-5-img.jpg",

  likedBy: "delisande",
  description:
  "They eat zooplankton, with particular preference for a group of tiny",
  comments: [
  {
    id: 1,
    author: "fabiola_yagua",
    comment: "🙌🙌" },

  {
    id: 2,
    author: "addre.im",
    comment: "👌" }] }];





const iconsPost = [
{
  id: "Like",
  ariaLabel: "Like",
  unactive:
  "M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z",
  active:
  "M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z" },

{
  id: "Message",
  ariaLabel: "Message",
  unactive:
  "M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" },

{
  id: "Share",
  ariaLabel: "Share",
  unactive:
  "M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z" }];



const Logo = () => {
  return /*#__PURE__*/(
    React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 840 300",
      version: "1.1",
      className: "Logo" }, /*#__PURE__*/

    React.createElement("path", {
      style: { fill: "#262626" },
      d: "m 64.760239,49.107948 c -16.2103,6.7854 -34.030801,25.955 -39.659101,50.016996 -7.1278,30.487496 22.534301,43.379696 24.967201,39.152496 2.8635,-4.967 -5.3151,-6.6467 -6.9986,-22.465 -2.1758,-20.430692 7.3224,-43.259692 19.2762,-53.276392 2.222,-1.861 2.1163,0.7292 2.1163,5.5203 0,8.5676 -0.4734,85.479502 -0.4734,101.531102 0,21.7198 -0.8971,28.5785 -2.5083,35.3558 -1.6325,6.8681 -4.257,11.5088 -2.2683,13.2964 2.2219,1.9996 11.7086,-2.7567 17.2006,-10.4218 6.5857,-9.1931 8.891,-20.2335 9.3049,-32.2232 0.4999,-14.4532 0.4786,-37.38741 0.4999,-50.46891 0.02,-11.9977 0.2021,-47.129592 -0.2103,-68.249592 -0.1011,-5.1803 -14.4679,-10.6152 -21.2479,-7.7745 M 640.38672,150.75505 c -0.5226,11.2916 -3.0221,20.1175 -6.1242,26.3429 -6.0055,12.052 -18.4671,15.7943 -23.7581,-1.5309 -2.8834,-9.444 -3.0181,-25.2164 -0.9451,-38.39521 2.1102,-13.4255 8.0024,-23.5648 17.7592,-22.6504 9.6235,0.9039 14.128,13.3042 13.0682,36.23311 z m -162.23548,70.0559 c -0.1306,18.7617 -3.0834,35.2118 -9.4155,39.9896 -8.9809,6.7747 -21.0519,1.6929 -18.5524,-11.9977 2.2116,-12.1149 12.6709,-24.4873 27.9933,-39.6044 0,0 0.032,3.4474 -0.025,11.6125 z m -2.4528,-70.1652 c -0.5492,10.2844 -3.2154,20.616 -6.1242,26.4536 -6.0042,12.0519 -18.5564,15.8196 -23.7581,-1.5309 -3.5566,-11.8546 -2.7048,-27.1975 -0.9451,-36.86491 2.2835,-12.543 7.8185,-24.1794 17.7592,-24.1794 9.6648,0 14.4306,10.6033 13.0682,36.12241 z m -93.9833,-0.1573 c -0.5892,10.8922 -2.7141,19.9975 -6.1241,26.6109 -6.1695,11.969 -18.3751,15.7649 -23.7581,-1.5309 -3.8806,-12.4716 -2.5595,-29.47701 -0.9452,-38.66331 2.3956,-13.632 8.3944,-23.2968 17.7593,-22.381 9.6195,0.9398 14.2959,13.3028 13.0681,35.96511 z m 430.70378,12.7226 c -2.3516,0 -3.4247,2.4239 -4.3125,6.504 -3.0794,14.1866 -6.3161,17.3899 -10.49,17.3899 -4.6631,0 -8.853,-7.0246 -9.9301,-21.0866 -0.8465,-11.0572 -0.7105,-31.41391 0.372,-51.66341 0.2212,-4.1605 -0.9265,-8.277 -12.0857,-12.3309 -4.8018,-1.7437 -11.7818,-4.311196 -15.2571,4.0779 -9.8194,23.7007 -13.6614,42.51711 -14.5652,50.16101 -0.047,0.3956 -0.5319,0.4764 -0.6172,-0.4479 -0.5759,-6.1222 -1.8636,-17.24741 -2.0236,-40.62151 -0.031,-4.5605 -0.9971,-8.4424 -6.0308,-11.6205 -3.2661,-2.0622 -13.1842,-5.709496 -16.7555,-1.3704 -3.0941,3.5487 -6.6774,13.0988 -10.4007,24.4193 -3.026,9.2009 -5.1336,15.4251 -5.1336,15.4251 0,0 0.04,-24.8259 0.076,-34.2428 0.016,-3.5526 -2.4209,-4.7364 -3.1554,-4.951 -3.3074,-0.9599 -9.8235,-2.5635 -12.5896,-2.5635 -3.4127,0 -4.2485,1.9076 -4.2485,4.6871 0,0.3639 -0.5386,32.6857 -0.5386,55.28661 0,0.9817 0,2.0528 0.01,3.1906 -1.8876,10.3876 -8.0091,24.4886 -14.6665,24.4886 -6.6654,0 -9.8101,-5.8952 -9.8101,-32.839 0,-15.71831 0.4719,-22.55301 0.7039,-33.92141 0.1346,-6.5481 0.3946,-11.5765 0.3799,-12.7176 -0.049,-3.4993 -6.1001,-5.263 -8.9156,-5.9148 -2.8288,-0.6573 -5.287,-0.9119 -7.2066,-0.8026 -2.7168,0.1533 -4.6391,1.9357 -4.6391,4.3872 0,1.3144 0.015,3.8139 0.015,3.8139 -3.4993,-5.4989 -9.1275,-9.3262 -12.8722,-10.435296 -10.086,-2.995396 -20.6107,-0.3413 -28.5491,10.767296 -6.3095,8.8263 -10.11268,18.823 -11.60978,33.1856 -1.0944,10.50011 -0.7372,21.14791 1.2078,30.15281 -2.3502,10.161 -6.7134,14.3239 -11.4911,14.3239 -6.936,0 -11.9644,-11.3212 -11.3805,-30.9007 0.3852,-12.87821 2.9621,-21.91581 5.7789,-34.99061 1.2011,-5.5736 0.2253,-8.4917 -2.2223,-11.2885 -2.2449,-2.5648 -7.0279,-3.8752 -13.904,-2.2635 -4.8977,1.1491 -11.9003,2.3848 -18.3071,3.334 0,0 0.3866,-1.5424 0.7039,-4.2618 1.6663,-14.261292 -13.8307,-13.104192 -18.7751,-8.549096 -2.9514,2.719496 -4.9604,5.926896 -5.7229,11.693796 -1.2091,9.1516 6.2548,13.4681 6.2548,13.4681 -2.4489,11.2098 -8.4517,25.85361 -14.6492,36.44091 -3.3193,5.6724 -5.8588,9.8757 -9.1369,14.3439 -0.012,-1.6638 -0.021,-3.3274 -0.027,-4.9834 -0.075,-23.56751 0.2386,-42.11591 0.3772,-48.80131 0.1347,-6.548 0.3973,-11.4431 0.3826,-12.5842 -0.037,-2.5595 -1.5317,-3.526 -4.6404,-4.7498 -2.7488,-1.0824 -5.9989,-1.8316 -9.3702,-2.0929 -4.2552,-0.3319 -6.8187,1.925 -6.7521,4.5938 0.013,0.5039 0.013,3.598 0.013,3.598 -3.4994,-5.499 -9.1276,-9.3262 -12.8722,-10.435396 -10.0861,-2.994096 -20.6107,-0.3399 -28.5492,10.767296 -6.3081,8.8263 -10.4393,21.2119 -11.6098,33.0763 -1.0904,11.05771 -0.8891,20.45471 0.5973,28.37051 -1.6037,7.9266 -6.2148,16.2156 -11.4285,16.2156 -6.6654,0 -10.458,-5.8953 -10.458,-32.839 0,-15.71831 0.4719,-22.55301 0.7039,-33.92021 0.1346,-6.548 0.3946,-11.5777 0.3799,-12.7175 -0.049,-3.4993 -6.1002,-5.263 -8.9156,-5.9162 -2.9461,-0.6812 -5.4896,-0.9318 -7.4426,-0.7879 -2.5768,0.192 -4.3885,2.4996 -4.3885,4.2206 l 0,3.9659 c -3.4993,-5.499 -9.1275,-9.3262 -12.8722,-10.435396 -10.086,-2.994096 -20.552,-0.2972 -28.5491,10.767296 -5.215,7.2146 -9.4369,15.2131 -11.6098,32.919 -0.6279,5.11671 -0.9052,9.90811 -0.8692,14.38661 -2.0796,12.7179 -11.2645,27.376 -18.7777,27.376 -4.3965,0 -8.5837,-8.5275 -8.5837,-26.7015 0,-24.20871 1.4984,-58.676706 1.7517,-61.998702 0,0 9.4928,-0.1613 11.3312,-0.1827 4.735,-0.052 9.0236,0.06 15.3303,-0.2626 3.1634,-0.1613 6.2108,-11.5138 2.9461,-12.9188 -1.4797,-0.6359 -11.9377,-1.1931 -16.0835,-1.2811 -3.486,-0.079 -13.1908,-0.7972 -13.1908,-0.7972 0,0 0.8705,-22.8783 1.0731,-25.2951 0.172,-2.0143 -2.4342,-3.0514 -3.9286,-3.6807 -3.6339,-1.537 -6.8853,-2.2729 -10.7392,-3.0674 -5.3244,-1.0984 -7.7399,-0.024 -8.2118,4.4698 -0.7105,6.8201 -1.0785,26.7962 -1.0785,26.7962 -3.9072,0 -17.254,-0.7638 -21.1625,-0.7638 -3.6313,0 -7.5506,15.617 -2.5302,15.8089 5.7762,0.224 15.8423,0.4173 22.5156,0.6186 0,0 -0.2972,35.035892 -0.2972,45.852492 0,1.1508 0.01,2.259 0.012,3.3343 -3.6727,19.14301 -16.6088,29.48361 -16.6088,29.48361 2.7781,-12.6642 -2.8968,-22.1744 -13.1188,-30.22481 -3.766,-2.9666 -11.2006,-8.5828 -19.519,-14.7372 0,0 4.8178,-4.7484 9.0903,-14.3012 3.0274,-6.7667 3.1581,-14.5106 -4.2725,-16.218196 -12.2777,-2.823496 -22.401,6.193396 -25.4205,15.819596 -2.3395,7.4572 -1.0917,12.9908 3.4914,18.739 0.3346,0.42 0.6972,0.8492 1.0718,1.2811 -2.7715,5.3419 -6.5788,12.5339 -9.8035,18.11121 -8.9503,15.485 -15.7116,27.7333 -20.8213,27.7333 -4.0846,0 -4.0299,-12.4352 -4.0299,-24.078 0,-10.03711 0.7412,-25.12721 1.3331,-40.75081 0.1959,-5.167 -2.3876,-8.1105 -6.7187,-10.7766 -2.6315,-1.6197 -8.2478,-4.8044 -11.5005,-4.8044 -4.8686,0 -18.915,0.6625 -32.1871,39.0538 -1.6726,4.8389 -4.9585,13.65601 -4.9585,13.65601 l 0.2828,-46.16711 c 0,-1.0824 -0.5765,-2.1289 -1.8965,-2.8448 -2.2365,-1.2144 -8.2099,-3.6979 -13.5214,-3.6979 -2.5307,0 -3.7936,1.1771 -3.7936,3.5233 l -0.4633,72.22881 c 0,5.488 0.1431,11.8903 0.6857,14.6905 0.5406,2.8037 1.4164,5.0845 2.5011,6.4415 1.0831,1.3544 2.336,2.3876 4.4017,2.814 1.9226,0.3958 12.4503,1.7477 12.9975,-2.2755 0.6556,-4.8215 0.6807,-10.0366 6.2088,-29.4864 8.6061,-30.28081 19.8269,-45.05531 25.1018,-50.30231 0.9223,-0.9171 1.9754,-0.9718 1.9247,0.5292 -0.2252,6.6388 -1.0171,23.2276 -1.5502,37.32091 -1.4289,37.7154 5.4322,44.706 15.2371,44.706 7.5012,0 18.0752,-7.4533 29.4103,-26.3202 7.0667,-11.7576 13.928,-23.2862 18.8577,-31.59531 3.4354,3.1802 7.2906,6.60301 11.1432,10.25951 8.9529,8.4973 11.8924,16.5715 9.9421,24.2313 -1.4917,5.8557 -7.1093,11.8904 -17.1074,6.0249 -2.9141,-1.7112 -4.1579,-3.0333 -7.088,-4.9625 -1.5743,-1.0364 -3.9779,-1.3462 -5.4189,-0.2605 -3.7433,2.8224 -5.8842,6.4123 -7.1066,10.8568 -1.1891,4.3247 3.142,6.6108 7.6318,8.6104 3.8659,1.721 12.175,3.2805 17.474,3.4581 20.6467,0.6905 37.1862,-9.9689 48.6999,-37.4648 2.061,23.7461 10.8326,37.1835 26.0724,37.1835 10.1887,0 20.404,-13.1698 24.8712,-26.1256 1.2824,5.2812 3.1807,9.8737 5.6322,13.7573 11.7431,18.6058 34.524,14.6012 45.9672,-1.1981 3.538,-4.8819 4.0765,-6.6362 4.0765,-6.6362 1.669,14.9184 13.6827,20.1308 20.5614,20.1308 7.7039,0 15.6583,-3.642 21.2332,-16.1929 0.6533,1.3621 1.3664,2.6629 2.145,3.896 11.743,18.6058 34.524,14.6012 45.9671,-1.1981 0.5399,-0.7411 1.0078,-1.4134 1.4171,-2.0168 l 0.3359,9.7991 c 0,0 -6.5281,5.9885 -10.5353,9.6622 -17.6366,16.1809 -31.0473,28.4572 -32.0338,42.7531 -1.2664,18.2285 13.5174,25.0032 24.7019,25.891 11.8777,0.9426 22.0491,-5.6187 28.3012,-14.8012 5.4989,-8.0823 9.0983,-25.4777 8.8343,-42.6584 -0.1053,-6.8799 -0.2786,-15.6277 -0.4146,-25.0045 6.1988,-7.1986 13.1828,-16.2969 19.6136,-26.9468 7.008,-11.6061 14.5185,-27.19211 18.3644,-39.32181 0,0 6.5255,0.056 13.4894,-0.3999 2.2276,-0.1453 2.8675,0.3092 2.4556,1.9423 -0.4973,1.9729 -8.7983,33.99081 -1.2225,55.32001 5.1857,14.6012 16.8755,19.2989 23.8061,19.2989 8.1131,0 15.8743,-6.1269 20.03348,-15.225 0.5012,1.0143 1.0251,1.9958 1.597,2.9019 11.7431,18.6058 34.4441,14.5772 45.9672,-1.1981 2.6008,-3.5592 4.0765,-6.6362 4.0765,-6.6362 2.4729,15.4397 14.4799,20.2094 21.3572,20.2094 7.164,0 13.9627,-2.9369 19.479,-15.9889 0.2306,5.7468 0.5932,10.4459 1.1664,11.9274 0.3493,0.906 2.3849,2.0434 3.8659,2.5927 6.5534,2.4302 13.2375,1.281 15.7103,0.7811 1.713,-0.3467 3.0488,-1.721 3.2314,-5.2698 0.4799,-9.3181 0.1853,-24.9739 3.0101,-36.609 4.7418,-19.52691 9.1649,-27.10141 11.2632,-30.85131 1.1744,-2.101 2.4995,-2.4476 2.5475,-0.224 0.099,4.4991 0.3226,17.7113 2.1596,35.46251 1.349,13.0554 3.1514,20.772 4.5364,23.2142 3.9526,6.984 8.8343,7.3147 12.8096,7.3147 2.5288,0 7.8171,-0.6988 7.3439,-5.1432 -0.2306,-2.1663 0.1733,-15.5544 4.8484,-34.792 3.0527,-12.56281 8.1424,-23.91411 9.9781,-28.06391 0.6772,-1.5304 0.9918,-0.324 0.9811,-0.089 -0.3866,8.6517 -1.2544,36.95031 2.2702,52.42731 4.7778,20.9666 18.5991,23.3128 23.4155,23.3128 10.282,0 18.6911,-7.8214 21.5239,-28.4012 0.6825,-4.9526 -0.328,-8.7768 -3.3554,-8.7768" })));



};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));