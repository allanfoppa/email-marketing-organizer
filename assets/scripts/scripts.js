document.addEventListener("DOMContentLoaded", function(event) {

  const ac = axios.create({
    baseURL: 'http://localhost:3000/'
  })

  try {
    ac.get('template-list.json')
      .then((response) => {
        console.log(response.data.templates)

        let template = response.data.templates


          const list = document.querySelector('.cards')

          for (const templates of template) {
            let title = templates.title
            let resume = templates.resume
            let link = templates.link

            let listContent =
            '<li class="cards__item">' +
              '<div class="card">' +
                '<div class="card__content">' +
                  '<div class="card_inner_container">' +
                    '<span class="card__title">' + title + '</span>' +
                    '<span class="card__badge card__badge__' + link + '" data-template-name="'+ link +'"></span>' +
                  '</div>' +
                  '<p class="card__text">' + resume + '</p>' +
                  '<a href="/templates/' + link + '" class="card__link">' +
                    '<button class="btn btn--block card__btn">' +
                      'Ir para e-mail template' +
                    '</button>' +
                  '</a>' +
                '</div>' +
              '</div>' +
            '</li>';

            list.insertAdjacentHTML('afterbegin', listContent)

          }

      })
      .catch((error) => {
        console.log(error)
      })

    } catch (error) {
      console.log(error)
    }

});