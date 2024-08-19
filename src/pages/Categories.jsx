import React from 'react'
import PageTitle from '../components/common/PageTitle'
import CategoryList from '../components/categories/CategoryList'

export default function Categories() {
    return (
        <main id="main" className="main">
            <PageTitle title="Categories" breadcrumbPages={{ Home: '/', }} />

            <CategoryList />
        </main>
    )
}
