import React from 'react'

export default function PageTitle({ title, breadcrumbPages }) {
    return (
        <div className="pagetitle">
            <h1>{title}</h1>
            <nav>
                <ol className="breadcrumb">
                    {Object.entries(breadcrumbPages).map(([page, path]) => (
                        <li key={page} className='breadcrumb-item'>
                            <a href={path}>{page}</a>
                        </li>
                    ))}
                    <li className="breadcrumb-item active">{title}</li>
                </ol>
            </nav>
        </div>
    )
}
