import React, { useState } from 'react';

export default function CategoryListItem({ category, isSubCategory = false, toggleHide, addSubCategory, editCategory, deleteCategory }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isAddingSubCategory, setIsAddingSubCategory] = useState(false);
    const [newSubCategoryName, setNewSubCategoryName] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(category.name);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleHideToggle = (e) => {
        e.preventDefault();
        toggleHide(category);
    };

    const handleAddSubCategory = (e) => {
        e.preventDefault();
        setIsAddingSubCategory(true);
        setIsEditing(false);
    };

    const handleSubCategoryNameChange = (e) => {
        setNewSubCategoryName(e.target.value);
    };

    const handleSubCategorySubmit = (e) => {
        e.preventDefault();
        if (newSubCategoryName.trim() !== '') {
            addSubCategory(category, newSubCategoryName);
            setNewSubCategoryName('');
            setIsAddingSubCategory(false);
        }
    };

    const handleCancel = () => {
        setNewSubCategoryName('');
        setIsAddingSubCategory(false);
        setIsEditing(false);
    };

    const handleEditCategory = (e) => {
        e.preventDefault();
        setIsEditing(true);
        setIsAddingSubCategory(false);
    };

    const handleEditedNameChange = (e) => {
        setEditedName(e.target.value);
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        if (editedName.trim() !== '') {
            editCategory(category, editedName);
            setIsEditing(false);
        }
    };

    const handleDeleteCategory = (e) => {
        e.preventDefault();
        deleteCategory(category);
    };

    return (
        <div className={`category-card container bg-white ${isSubCategory ? 'ms-auto justify-content-end' : 'm-auto'} position-relative row align-items-center justify-content-between py-2 px-0 rounded my-3 ${isSubCategory ? 'mb-0 pb-1 pt-1' : 'shadow-sm'}`}>
            <div className={`d-flex align-items-center col-md-4 col-sm-8 col-10 ${category.hidden ? 'opacity-50' : ''}`} onClick={handleToggle} style={{ cursor: category.hidden ? 'default' : 'pointer' }}>
                <div className={`rounded-circle d-flex align-items-center justify-content-center`} style={{ background: category.color, width: '30px', minWidth: '30px', height: '30px' }}>
                    {category.icon}
                </div>
                {!isEditing ? <div className="mx-2">
                    <h6 className={`mb-0 fw-bold d-flex align-items-center ${category.hidden ? 'text-muted' : ''}`}>
                        {category.name}
                        {category.subCategories.length > 0 && (
                            <i className={`bi ${isOpen ? 'bi-chevron-up' : 'bi-chevron-down'} ms-2 ${category.hidden ? 'd-none' : ''}`} style={{ fontSize: '10px' }}></i>
                        )}
                    </h6>
                </div> :
                    !isAddingSubCategory && <div className="mx-2">
                        <form onSubmit={handleEditSubmit} class="form-group d-md-flex gap-2 col-12">
                            <input onChange={handleEditedNameChange} type="text" class="w-100 form-control account-input shadow-none" placeholder={category.name} required="" style={{ fontSize: '12px' }} />
                            <div className='d-flex gap-2 mt-md-0 mt-2'>
                                <button type="submit" class="btn btn-sm btn-primary submit-btn px-3" style={{ fontSize: '12px' }}>Save</button>
                                <button onClick={handleCancel} type="button" class="btn btn-sm btn-light submit-btn px-2" style={{ fontSize: '12px' }}>Cancel</button>
                            </div>
                        </form>
                    </div>
                }
            </div>

            {/* Render progress bar */}
            {!isSubCategory && !category.hidden && (
                <div className="col-4 text-center d-md-block d-none" title='Category Share'>
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-8">
                            <p className="p-0 m-0">{category.progress}%</p>
                            <div className="progress" style={{ height: '10px' }}>
                                <div className="progress-bar" style={{ width: `${category.progress}%`, background: category.color }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className={`col-sm-4 col-2 text-end category-options`}>
                <div className="filter">
                    <a className="icon" href="#" data-bs-toggle="dropdown">
                        <i className="bi bi-three-dots font-lg" style={{ fontSize: '18px' }} />
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        {!category.hidden && isSubCategory && !category.isDeleteAble && <li>
                            <a onClick={handleAddSubCategory} className="dropdown-item py-1" href="#" style={{ fontSize: '12px' }}>
                                Add sub category
                            </a>
                        </li>}
                        {isSubCategory && !category.hidden && category.isDeleteAble && <li>
                            <a onClick={handleEditCategory} className="dropdown-item py-1" href="#" style={{ fontSize: '12px' }}>
                                Edit
                            </a>
                        </li>}
                        <li>
                            {category.isDeleteAble && !category.hidden ? <a onClick={handleDeleteCategory} className="dropdown-item py-1" href="#" style={{ fontSize: '12px' }}>
                                Delete
                            </a> : <a onClick={handleHideToggle} className="dropdown-item py-1" href="#" style={{ fontSize: '12px' }}>
                                {category.hidden ? 'Show' : 'Hide'}
                            </a>}
                        </li>
                    </ul>
                </div>
            </div>

            {/* Subcategory Input */}
            {isAddingSubCategory && !isEditing && !category.hidden && (
                <form onSubmit={handleSubCategorySubmit} class="form-group d-md-flex gap-2 mt-2 col-12 col-lg-5">
                    <input onChange={handleSubCategoryNameChange} type="text" class="form-control account-input shadow-none" placeholder="Enter subcategory name" required="" style={{ fontSize: '12px' }} />
                    <div className='d-flex gap-2 mt-md-0 mt-2'>
                        <button type="submit" class="btn btn-sm btn-primary submit-btn px-4" style={{ fontSize: '12px' }}>Save</button>
                        <button onClick={handleCancel} type="submit" class="btn btn-sm btn-light submit-btn px-4" style={{ fontSize: '12px' }}>Cancel</button>
                    </div>
                </form>
            )}

            {/* Render Subcategories */}
            {isOpen && category.subCategories && category.subCategories.length > 0 && !category.hidden && (
                <div className="">
                    {category.subCategories.map((subCategory, index) => (
                        <CategoryListItem
                            key={index}
                            category={subCategory}
                            isSubCategory={true}
                            toggleHide={toggleHide}
                            addSubCategory={addSubCategory}
                            editCategory={editCategory}
                            deleteCategory={deleteCategory}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
