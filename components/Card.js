const Card = (x) => {
  // four objects 1,2,3,4
  // indeimgDataes      0,1,2,3

  // object
  // const imgData = data[0];

  // Date function
  // debug - find errors

  // Destructure
  // Two ways of destructuring in js
  // First
  const {
    description,
    user: { name },
    created_at: createdAt,
    links: { self },
    authorsUrl,
    author,
    weight,
  } = x;

  const getDate = (x) => {
    const date = new Date(createdAt);
    const readableDate = date.toLocaleString("default", {
      year: "2-digit",
      month: "short",
      day: "numeric",
    });
    return readableDate;
  };

  // Image function.
  // map
  const buidImage = ({
    urls: { full, regular, small },
    width,
    height,
    description,
  }) => {
    let srcset = `${full} ${width}w`;
    if (regular) {
      srcset = `${regular} 1080w`;
    }
    if (small) {
      srcset = `${small} 400w`;
    }

    const img = `
     <img
          srcset="${srcset}"
          sizes="(maimgData-width: 450pimgData) 400pimgData, (maimgData-width: 800) 1080pimgData"
          src="${regular}"
          width="${width}"
          height="${height}"
          alt="${description}"
          loading="lazy"
        />
     `;
    return img;
  };

  return `
      <div class="image">
        ${buidImage(x)}
        <figcaption class="image__caption">
          <h3 class="image__title">${description}</h3>
          <div class="image__meta">
            <p>
              Photo by
              <span class="image__photog">${name}</span>.
            </p>
            <p>
            Uploaded On <time datetime="${createdAt}">${getDate(x)}</time>
            </p>
            <p>
              <a href="${self}" class="image__link">
                View it on Unsplash.
              </a>
            </p>
            <p>Author: <a href="${authorsUrl}">${author}</a><p/>
            <p>${weight}</p>
          </div>
        </figcaption>
      </div>
    `;
};

export default Card;
