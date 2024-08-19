import React from 'react'
import PageTitle from '../components/common/PageTitle'
import CategoryList from '../components/categories/CategoryList'

export default function Categories() {
    return (
        <main id="main" className="main">
            <PageTitle title="Income & Expenses" breadcrumbPages={{ Home: '/', }} />

            <CategoryList />
        </main>
    )
}
