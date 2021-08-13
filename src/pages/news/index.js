import React, { useState, useEffect } from 'react'
import { Button } from 'antd'
import { useTranslation } from 'react-i18next'

import './news.scss'

import LayoutMain from './../../hoc/layout/main'
import { getNews } from './../../components/axios'
import { randomIndex } from './../../utils/helper'
import Loading from './../../hoc/loading'

function News() {
  const { t } = useTranslation()
  const [articles, setArticles] = useState([])
  const [hotArticles, setHotArticles] = useState([])
  const [recentArticles, setRecentArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)
  const [loadMore, setLoadMore] = useState(6)
  useEffect(() => {
    getNews()
      .then(res => {
        if (res.status === 200) {
          const hotArticles = []
          for (let i = 0; i < 4; i++) {
            hotArticles.push(res.data.articles[randomIndex(0, res.data.articles.length)])
          }
          setHotArticles(hotArticles)
          setRecentArticles([res.data.articles[0], res.data.articles[1]])
        }
        setLoading(false)
      })
  }, [])
  useEffect(() => {
    setLoadingMore(true)
    getNews()
      .then(res => {
        if (res.status === 200) {
          setTimeout(() => {
            setArticles([...res.data.articles.slice(0, loadMore)])
          }, 1000);
        }
        setTimeout(() => {
          setLoadingMore(false)
        }, 1000);
      })
  }, [loadMore])

  const handleNewsClick = (news) => {
    if (recentArticles.findIndex(item => item.title === news.title) === -1) {
      setRecentArticles([news, ...recentArticles])
    }
    console.log('ckick', news)
  }
  const handleLoadMoreClick = () => {
    setLoadMore((loadMore + 4))
  }
  return (
    <LayoutMain>
      <Loading status={loading}>
        <div className='news-page'>
          <div className='news-container'>
            {/* NEWS__HOT */}
            {
              hotArticles.length > 0 &&
              <div className='news__hot'>
                <div className='news-hot__primary'>
                  <div className='news news--style0' onClick={() => handleNewsClick(hotArticles[0])}>
                    <div className='news__image'>
                      <img alt='' src={hotArticles[0].urlToImage} />
                    </div>
                    <div className='news__title'>{hotArticles[0].title}</div>
                    <div className='news__date'>
                      {`${new Date(hotArticles[0].publishedAt).getDate()}/${new Date(hotArticles[0].publishedAt).getMonth() + 1}/${new Date(hotArticles[0].publishedAt).getFullYear()}`}
                    </div>
                  </div>
                </div>
                <div className='news-hot__more'>
                  <div className='news-hot-more__top'>
                    <div className='news news--style0' onClick={() => handleNewsClick(hotArticles[1])}>
                      <div className='news__image'>
                        <img alt='' src={hotArticles[1].urlToImage} />
                      </div>
                      <div className='news__title'>{hotArticles[1].title}</div>
                      <div className='news__date'>
                        {`${new Date(hotArticles[1].publishedAt).getDate()}/${new Date(hotArticles[1].publishedAt).getMonth() + 1}/${new Date(hotArticles[1].publishedAt).getFullYear()}`}
                      </div>
                    </div>
                  </div>
                  <div className='news-hot-more__bottom'>
                    <div className='news news--style0' onClick={() => handleNewsClick(hotArticles[2])}>
                      <div className='news__image'>
                        <img alt='' src={hotArticles[2].urlToImage} />
                      </div>
                      <div className='news__title'>{hotArticles[2].title}</div>
                      <div className='news__date'>
                        {`${new Date(hotArticles[2].publishedAt).getDate()}/${new Date(hotArticles[2].publishedAt).getMonth() + 1}/${new Date(hotArticles[2].publishedAt).getFullYear()}`}
                      </div>
                    </div>
                    <div className='news news--style0' onClick={() => handleNewsClick(hotArticles[3])}>
                      <div className='news__image'>
                        <img alt='' src={hotArticles[3].urlToImage} />
                      </div>
                      <div className='news__title'>{hotArticles[3].title}</div>
                      <div className='news__date'>
                        {`${new Date(hotArticles[3].publishedAt).getDate()}/${new Date(hotArticles[3].publishedAt).getMonth() + 1}/${new Date(hotArticles[3].publishedAt).getFullYear()}`}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            }
            {/* NEWS__MAIN */}
            <div className='news__main'>
              <div className='news-main__primary'>
                {articles.length > 0 && <div className='news-main-primary__filter'>{t('NewsPage.Title')}</div>}
                <div className='news-main-primary__list'>
                  {
                    articles.length > 0 &&
                    articles.map((article, idx) => {
                      return (
                        <div className='news news--style1' key={idx}>
                          <div className='news__image'>
                            <img alt='' src={article.urlToImage} />
                          </div>
                          <div className='news__title'
                            onClick={() => handleNewsClick(article)}
                          >{article.title}</div>
                          <div className='news__date'>
                            {`${new Date(article.publishedAt).getDate()}/${new Date(article.publishedAt).getMonth() + 1}/${new Date(article.publishedAt).getFullYear()}`}
                          </div>
                        </div>
                      )
                    })
                  }
                  <div className='load-more'>
                    {
                      !loading &&
                      <Button type="primary" size="small" loading={loadingMore} onClick={handleLoadMoreClick}>
                        {t('NewsPage.BtnLoadMore')}
                      </Button>
                    }
                  </div>
                </div>
              </div>
              <div className='news-main__recent'>
                {recentArticles.length > 0 && <div className='news-main-recent__title'>'{t('NewsPage.Recently')}'</div>}
                <div className='news-main-recent__list'>
                  {
                    recentArticles.length > 0 &&
                    recentArticles.map((article, idx) => {
                      return (
                        <div className='news news--style2' key={article.publishedAt}>
                          <div className='news__image'>
                            <img alt='' src={article.urlToImage} />
                          </div>
                          <div className='news__title'>{article.title}</div>
                          {/* <div className='news__date'>{article.publishedAt}</div> */}
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </Loading>
    </LayoutMain>
  )
}

export default News