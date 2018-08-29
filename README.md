# Bingeterest

[Link to Live Site](https://bingeterest1.herokuapp.com/#/)

Bingeterest is a full-stack web application for the binge-worthy things in life - inspired by Pinterest. This lifestyle site allows users to discover and share ideas they have created or come across as "binges" and categorize the binges with "boards".

The project was designed and built within a two-week timeframe, though I plan to continue adding improvements over time.

![login](https://s3-us-west-1.amazonaws.com/bingeterest-dev/README/splash.gif)

*Disclaimer: Login background image taken from [Pinterest](https://www.pinterest.com/)*

## Technologies

This personal project utilizes a Rails backend with a PostgreSQL database for RESTful API data fetching and storage. Bingeterest hosts all graphic content through AWS S3 services and accesses data through Active Storage associations. The frontend of the application is built using React.js and a Redux framework for simple single page application that allows for scalability and focuses on user interface.

## Features

### User Authentication

Users must login or signup to access any content on Bingeterest. Authentication is validated with a secure frontend to backend protocol using BCrypt - once logged in users are bootstrapped to enhance their experience.

### Binge Creating and Binging

Users can create, remove and update personal binges to share their creative ideas. Binge creation is done through a modal and can support drag and drop and click upload of images and animated GIFs.

![Binge Creation](https://s3-us-west-1.amazonaws.com/bingeterest-dev/README/binge_creation.gif)

### Board Creating and Binging

Boards are a way for users to make collections of their favorite binges. Boards can categorized for easy organization and search. A single modal component can be used for all binge/board-related tasks:

```js
function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'createBoard':
      component = <BoardFormContainer cancel={closeModal}/>;
      break;
    case 'editBoard':
      component = <BoardUpdateContainer cancel={closeModal}/>;
      break;
    case 'createBinge':
      component = <BingeFormContainer cancel={closeModal}/>;
      break;
    case 'editBinge':
      component = <BingeUpdateContainer cancel={closeModal}/>;
      break;
    case 'createBinging':
      component = <BingingFormContainer cancel={closeModal}/>;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}
```

### Adaptive Feed

The discover feed dynamically adapts to display all binges in an aesthetic manner through a masonry layout. The number of columns are calculated based on screen size and can accommodate a variety of devices.

![Discover Feed](https://s3-us-west-1.amazonaws.com/bingeterest-dev/README/discover_feed.gif)

## Possible future features
  * Search
  * Private Boards
  * Likes
