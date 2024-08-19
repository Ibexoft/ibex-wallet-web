import React, { useState } from 'react';

export default function CategoryListItem({ category, isSubCategory = false, toggleHide, addSubCategory, editCategory }) {
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

    return (
        <div className={`category-card position-relative row align-items-center bg-white justify-content-between py-2 px-sm-3 px-0 rounded my-3 ${isSubCategory ? 'mb-0 pb-0' : 'shadow-sm'}`}>
            <div className="d-flex align-items-center col-md-4 col-sm-8 col-12" onClick={handleToggle} style={{ cursor: 'pointer' }}>
                <div className={`rounded-circle d-flex align-items-center justify-content-center ${category.hidden ? 'bg-dark' : ''}`} style={{ background: category.color, width: '30px', minWidth: '30px', height: '30px' }}>
                    {category.icon}
                </div>
                <div className="mx-2">
                    <h6 className={`mb-0 fw-bold d-flex align-items-center ${category.hidden ? 'text-muted' : ''}`}>
                        {category.name}
                        {category.subCategories.length > 0 && (
                            <i className={`bi ${isOpen ? 'bi-chevron-up' : 'bi-chevron-down'} ms-2 ${category.hidden ? 'd-none' : ''}`} style={{ fontSize: '10px' }}></i>
                        )}
                    </h6>
                </div>
            </div>

            {/* Render progress bar */}
            {!isSubCategory && !category.hidden && (
                <div className="col-4 text-center d-md-block d-none">
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

            <div className={`col-4 ${category.hidden ? 'd-none' : 'd-md-block d-none'} text-end category-options`}>
                {!category.hidden && isSubCategory && (
                    <>
                        <a href="#" className="mx-2" onClick={handleAddSubCategory}>Add sub category</a>
                        <a href="#" className="mx-2" onClick={handleEditCategory}>Edit</a>
                    </>
                )}
                <a href="#" className="mx-2" onClick={handleHideToggle}>{category.hidden ? 'Show' : 'Hide'}</a>
            </div>
            <div className={`col-4 ${category.hidden ? 'd-md-block d-none' : 'd-none'} text-end category-options`}>
                <a href="#" className="mx-2" onClick={handleHideToggle}>{category.hidden ? 'Show' : 'Hide'}</a>
            </div>

            <div className={`col-12 text-start mt-md-0 ms-4 ps-4 ${category.hidden ? 'd-none' : 'd-md-none d-block'} category-options`}>
                {!category.hidden && (
                    <>
                        <a href="#" className="mx-2" onClick={handleAddSubCategory}>Add sub category</a>
                        <a href="#" className="mx-2" onClick={handleEditCategory}>Edit</a>
                    </>
                )}
                <a href="#" className="mx-2" onClick={handleHideToggle}>{category.hidden ? 'Show' : 'Hide'}</a>
            </div>
            <div className={`col-12 text-start mt-md-0 mt-2 ms-4 ps-4 ${category.hidden ? 'd-sm-none d-block' : 'd-none'} category-options`}>
                <a href="#" className="mx-2" onClick={handleHideToggle}>{category.hidden ? 'Show' : 'Hide'}</a>
            </div>

            {/* Subcategory Input */}
            {isAddingSubCategory && !category.hidden && (
                <form onSubmit={handleSubCategorySubmit} class="form-group d-flex gap-2 mt-2 col-12 col-lg-6">
                    <input onChange={handleSubCategoryNameChange} type="text" class="form-control account-input shadow-none" placeholder="Enter subcategory name" required="" style={{ fontSize: '12px' }} />
                    <div className='d-flex gap-2'>
                        <button type="submit" class="btn btn-sm btn-primary submit-btn px-4" style={{ fontSize: '12px' }}>Save</button>
                        <button onClick={handleCancel} type="submit" class="btn btn-sm btn-light submit-btn px-4" style={{ fontSize: '12px' }}>Cancel</button>
                    </div>
                </form>
            )}

            {/* Editing Category */}
            {isEditing && !category.hidden && (
                <form onSubmit={handleEditSubmit} class="form-group d-flex gap-2 mt-2 col-12 col-lg-6">
                    <input onChange={handleEditedNameChange} type="text" class="form-control account-input shadow-none" placeholder="Enter category name" required="" style={{ fontSize: '12px' }} />
                    <div className='d-flex gap-2'>
                        <button type="submit" class="btn btn-sm btn-primary submit-btn px-4" style={{ fontSize: '12px' }}>Save</button>
                        <button onClick={handleCancel} type="button" class="btn btn-sm btn-light submit-btn px-4" style={{ fontSize: '12px' }}>Cancel</button>
                    </div>
                </form>
            )}

            {/* Render Subcategories */}
            {isOpen && category.subCategories && category.subCategories.length > 0 && !category.hidden && (
                <div className="ms-2">
                    {category.subCategories.map((subCategory, index) => (
                        <CategoryListItem
                            key={index}
                            category={subCategory}
                            isSubCategory={true}
                            toggleHide={toggleHide}
                            addSubCategory={addSubCategory}
                            editCategory={editCategory}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
