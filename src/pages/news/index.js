import React from 'react'

import './news.scss'

function News() {
  return (
    <div className='news-page'>
      <div className='news-container'>
        {/* NEWS__HOT */}
        <div className='news__hot'>
          <div className='news-hot__primary'>
            <div className='news news--style0'>
              <div className='news__image'>Image</div>
              <div className='news__title'>Title news 1</div>
              <div className='news__date'>Date</div>
            </div>
          </div>
          <div className='news-hot__more'>
            <div className='news-hot-more__top'>
              <div className='news news--style0'>
                <div className='news__image'>Image</div>
                <div className='news__title'>Title news 1</div>
                <div className='news__date'>Date</div>
              </div>
            </div>
            <div className='news-hot-more__bottom'>
              <div className='news news--style0'>
                <div className='news__image'>Image</div>
                <div className='news__title'>Title news 1</div>
                <div className='news__date'>Date</div>
              </div>
              <div className='news news--style0'>
                <div className='news__image'>Image</div>
                <div className='news__title'>Title news 1</div>
                <div className='news__date'>Date</div>
              </div>
            </div>
          </div>
        </div>
        {/* NEWS__MAIN */}
        <div className='news__main'>
          <div className='news-main__primary'>
            <div className='news-main-primary__filter'>Filter</div>
            <div className='news-main-primary__list'>

              <div className='news news--style1'>
                <div className='news__image'>Image</div>
                <div className='news__title'>Title news 1</div>
                <div className='news__date'>Date</div>
              </div>

              <div className='news news--style1'>
                <div className='news__image'>Image</div>
                <div className='news__title'>Title news 1</div>
                <div className='news__date'>Date</div>
              </div>

              <div className='news news--style1'>
                <div className='news__image'>Image</div>
                <div className='news__title'>Title news 1</div>
                <div className='news__date'>Date</div>
              </div>

              <div className='news news--style1'>
                <div className='news__image'>Image</div>
                <div className='news__title'>Title news 1</div>
                <div className='news__date'>Date</div>
              </div>
            </div>

            <div className='load-more'>Load more</div>

          </div>

          <div className='news-main__recent'>
            <div className='news-main-recent__title'>NEW RECENT</div>
            <div className='news-main-recent__list'>
              <div className='news news--style2'>
                <div className='news__image'>Image</div>
                <div className='news__title'>Title news 1</div>
                <div className='news__date'>Date</div>
              </div>
              <div className='news news--style2'>
                <div className='news__image'>Image</div>
                <div className='news__title'>Title news 1</div>
                <div className='news__date'>Date</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default News