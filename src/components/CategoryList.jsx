import React, { useState, useEffect } from 'react';
import CategoryListItem from './CategoryListItem';
import * as Icon from 'react-bootstrap-icons';

const initialCategories = [
    {
        name: "Food & Beverages",
        progress: 50,
        color: '#f44336',
        hidden: false,
        icon: <Icon.CupStraw color="white" size={16} />,
        subCategories: [
            {
                name: "Bar, Cafe",
                progress: 0,
                color: '#f44336',
                hidden: false,
                icon: <Icon.CupHot color="white" size={16} />,
                subCategories: []
            },
            {
                name: "Groceries",
                progress: 0,
                color: '#f44336',
                hidden: false,
                icon: <Icon.Shop color="white" size={16} />,
                subCategories: []
            },
            {
                name: "Restaurant, fast-food",
                progress: 0,
                color: '#f44336',
                hidden: false,
                icon: <Icon.Receipt color="white" size={16} />,
                subCategories: []
            }
        ]
    },
    {
        name: "Entertainment",
        progress: 20,
        color: '#4fc3f7',
        hidden: false,
        icon: <Icon.Tv color="white" size={16} />,
        subCategories: [
            {
                name: "Movies",
                progress: 0,
                color: '#4fc3f7',
                hidden: false,
                icon: <Icon.Film color="white" size={16} />,
                subCategories: []
            },
            {
                name: "Music",
                progress: 0,
                color: '#4fc3f7',
                hidden: false,
                icon: <Icon.Headphones color="white" size={16} />,
                subCategories: []
            },
            {
                name: "Gaming",
                progress: 0,
                color: '#4fc3f7',
                hidden: false,
                icon: <Icon.Controller color="white" size={16} />,
                subCategories: []
            }
        ]
    },
    {
        name: "Housing",
        progress: 30,
        color: '#ffa726',
        hidden: false,
        icon: <Icon.House color="white" size={16} />,
        subCategories: [
            {
                name: "Utilities",
                progress: 0,
                color: '#ffa726',
                hidden: false,
                icon: <Icon.Lightbulb color="white" size={16} />,
                subCategories: []
            },
            {
                name: "Maintainance",
                progress: 0,
                hidden: false,
                color: '#ffa726',
                icon: <Icon.Tools color="white" size={16} />,
                subCategories: []
            },
            {
                name: "Rent",
                progress: 0,
                hidden: false,
                color: '#ffa726',
                icon: <Icon.Key color="white" size={16} />,
                subCategories: []
            },
            {
                name: "Insurance",
                progress: 0,
                hidden: false,
                color: '#ffa726',
                icon: <Icon.Shield color="white" size={16} />,
                subCategories: []
            }
        ]
    },
    {
        name: "Transportations",
        progress: 0,
        color: '#78909c',
        hidden: false,
        icon: <Icon.CarFront color="white" size={16} />,
        subCategories: [
            {
                name: "Trips",
                progress: 0,
                color: '#78909c',
                hidden: false,
                icon: <Icon.Airplane color="white" size={16} />,
                subCategories: []
            },
            {
                name: "Taxi, Public Transport",
                progress: 0,
                color: '#78909c',
                hidden: false,
                icon: <Icon.BusFront color="white" size={16} />,
                subCategories: []
            },
        ]
    }
];


export default function CategoryList() {
    const [categories, setCategories] = useState(initialCategories);

    const toggleHide = (category) => {
        const updateHiddenStatus = (cats) => {
            return cats.map(cat => {
                if (cat.name === category.name) {
                    return { ...cat, hidden: !cat.hidden };
                } else if (cat.subCategories.length > 0) {
                    return { ...cat, subCategories: updateHiddenStatus(cat.subCategories) };
                }
                return cat;
            });
        };
        setCategories(updateHiddenStatus(categories));
    };

    const addSubCategory = (parentCategory, subCategoryName) => {
        const addSubCat = (cats) => {
            return cats.map(cat => {
                if (cat.name === parentCategory.name) {
                    return {
                        ...cat,
                        subCategories: [
                            ...cat.subCategories,
                            {
                                name: subCategoryName,
                                progress: 0,
                                color: parentCategory.color,
                                hidden: false,
                                icon: parentCategory.icon, // Use default icon or customize
                                subCategories: []
                            }
                        ]
                    };
                } else if (cat.subCategories.length > 0) {
                    return { ...cat, subCategories: addSubCat(cat.subCategories) };
                }
                return cat;
            });
        };
        setCategories(addSubCat(categories));
    };

    const editCategory = (category, newName) => {
        const updateCategoryName = (cats) => {
            return cats.map(cat => {
                if (cat.name === category.name) {
                    return { ...cat, name: newName };
                } else if (cat.subCategories.length > 0) {
                    return { ...cat, subCategories: updateCategoryName(cat.subCategories) };
                }
                return cat;
            });
        };
        setCategories(updateCategoryName(categories));
    };

    return (
        <div>
            {categories.map((category, index) => (
                <CategoryListItem
                    key={index}
                    category={category}
                    toggleHide={toggleHide}
                    addSubCategory={addSubCategory}
                    editCategory={editCategory}
                />
            ))}
        </div>
    );
}
