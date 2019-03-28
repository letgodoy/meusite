import Helmet from 'react-helmet'
import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import ogImage from '../../assets/imgs/perfil.jpg'

const siteQuery = graphql`
query DefaultSEOQuery {
    site {
        siteMetadata {
            title
            siteUrl
        }
    }
}`

const SEO = ({ pageTitle, description, keywords, meta }) => (
    <StaticQuery query={siteQuery} render={data => (
        <Helmet 
        htmlAttributes={{ lang: 'pt-br' }}
        title={pageTitle || data.site.siteMetadata.title}
        titleTemplate={pageTitle && `%s | ${data.site.siteMetadata.title}`}
        meta={[
            { name: 'description', content: description },
            { name: 'keywords', content: keywords },
            { property: 'og:title', content: pageTitle },
            { property: 'og:description', content: description },
            { property: 'og:type', content: 'website' },
            { property: 'og:url', content: data.site.siteMetadata.siteUrl },
            { property: 'og:image', content: `${data.site.siteMetadata.siteUrl}${ogImage}` },
            { property: 'og:image:alt', content: description },
            { property: 'og:image:type', content: 'image/jpg' },
            { property: 'og:image:width', content: '955' },
            { property: 'og:image:height', content: `960` }

        ].concat(meta)}
        />
    )}
    />
)

SEO.propTypes = {
    pageTitle: PropTypes.string,
    description: PropTypes.string,
    keywords: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
}

SEO.defaultProps = {
    pageTitle: null,
    description: '',
    keywords: '',
    meta: [],
}

export default SEO