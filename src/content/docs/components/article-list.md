---
title: Articlelist Component
description: A detailed overview of the articlelist AEM component.
---
import { Tabs, TabItem } from '@astrojs/starlight/components';

This document provides a detailed overview of the `articlelist` component, which is used to query and display a collection of articles.

## Dependencies

-   **Sling Model:** `com.voltrux.aem.core.models.ArticleListModel`
-   **Super Type:** None (custom component)

## Files

Below are the core configuration and template files for the `articlelist` component.

<Tabs>
<TabItem label=".content.xml">
```xml
<?xml version="1.0" encoding="UTF-8"?>
<jcr:root xmlns:cq="http://www.day.com/jcr/cq/1.0" xmlns:jcr="http://www.jcp.org/jcr/1.0"
          jcr:description="Voltrux Motors Article list Component"
          jcr:primaryType="cq:Component"
          jcr:title="Article list"
          componentGroup="Voltrux Motors - Content"/>
```
</TabItem>
<TabItem label="Dialog">
```xml
<?xml version="1.0" encoding="UTF-8"?>
<jcr:root xmlns:sling="http://sling.apache.org/jcr/sling/1.0"
          xmlns:granite="http://www.adobe.com/jcr/granite/1.0"
          xmlns:cq="http://www.day.com/jcr/cq/1.0"
          xmlns:jcr="http://www.jcp.org/jcr/1.0" xmlns:nt="http://www.jcp.org/jcr/nt/1.0"
          jcr:primaryType="nt:unstructured" jcr:title="Article List (Landing Page)"
          sling:resourceType="cq/gui/components/authoring/dialog">
    <content jcr:primaryType="nt:unstructured"
             sling:resourceType="granite/ui/components/coral/foundation/container">
        <items jcr:primaryType="nt:unstructured">
            <tabs jcr:primaryType="nt:unstructured"
                  sling:resourceType="granite/ui/components/coral/foundation/tabs">
                <items jcr:primaryType="nt:unstructured">
                    <settings jcr:primaryType="nt:unstructured"
                              jcr:title="Content Source"
                              sling:resourceType="granite/ui/components/coral/foundation/container">
                        <items jcr:primaryType="nt:unstructured">

                            <!-- Field to set the root path for content query -->
                            <rootPath jcr:primaryType="nt:unstructured"
                                      sling:resourceType="granite/ui/components/coral/foundation/form/pathfield"
                                      fieldLabel="Root Path for Articles"
                                      name="./rootPath"
                                      rootPath="/content"
                                      placeholder="/content/voltrux/en/blog"/>

                            <!-- Multifield for Category Filters -->
                            <categories jcr:primaryType="nt:unstructured"
                                        sling:resourceType="granite/ui/components/coral/foundation/form/multifield"
                                        fieldLabel="Article Categories (Filters)">
                                <field jcr:primaryType="nt:unstructured"
                                       sling:resourceType="granite/ui/components/coral/foundation/form/textfield"
                                       name="./categories"
                                       value="All"/>
                            </categories>

                            <helpText jcr:primaryType="nt:unstructured"
                                      sling:resourceType="granite/ui/components/coral/foundation/text"
                                      text="Note: In the final implementation, the Sling Model will query child resources beneath the Root Path to populate the list."/>
                        </items>
                    </settings>
                </items>
            </tabs>
        </items>.
    </content>
</jcr:root>
```
</TabItem>
<TabItem label="articlelist.html">
```html
<sly data-sly-use.model="com.voltrux.aem.core.models.ArticleListModel"/>

<!-- New: Added data-component hook for JS -->
<section class="article-list" data-component="article-list">
    <div class="container">

        <!-- Placeholder is now handled by _cq_editConfig.xml -->

        <sly data-sly-test="${model.articles && model.articles.size > 0}">

            <!-- Featured Article (First Article in the list) -->
            <sly data-sly-list.featuredArticle="${model.articles}" data-sly-test.isFeatured="${featuredArticleList.first}">
                <div class="featured-article-card">

                    <div class="featured-article-image">
                        <img
                                src="${featuredArticle.imageSrc @ context='uri'}"
                                alt="${featuredArticle.title}"
                                onerror="this.onerror=null; this.src='https://placehold.co/800x600/F2F2F2/666?text=Featured+Image';"
                        />
                    </div>

                    <div class="featured-article-content">
                        <span class="article-category">${featuredArticle.category}</span>
                        <h2>${featuredArticle.title @ context='html'}</h2>
                        <p class="excerpt">${featuredArticle.excerpt @ context='html'}</p>

                        <div class="article-meta">
                            <div class="meta-item">
                                <!-- User Icon Placeholder -->
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                                <span>${featuredArticle.author}</span>
                            </div>
                            <div class="meta-item">
                                <!-- Calendar Icon Placeholder -->
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                                <span>${featuredArticle.date}</span>
                            </div>
                            <div>${featuredArticle.readTime}</div>
                        </div>

                        <a href="${featuredArticle.path @ context='uri'}" class="cta-button">
                            Read Article
                            <!-- Arrow Icon Placeholder -->
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </a>
                    </div>

                </div>
            </sly>

            <!-- Category Filter (Static for now, but configured via model) -->
            <div class="category-filter">
                <sly data-sly-list.category="${model.categories}">
                    <!-- New: Added data-filter attribute -->
                    <button data-filter="${category.slug}">
                        ${category.name}
                    </button>
                </sly>
            </div>

            <!-- Articles Grid (All articles except the first one) -->
            <div class="articles-grid">
                <sly data-sly-list.article="${model.articles}" data-sly-test.isGridItem="${!articleList.first}">
                    <!-- New: Added data-category attribute -->
                    <a href="${article.path @ context='uri'}" class="article-card" data-category="${article.categorySlug}">
                        <div class="article-card-image">
                            <img
                                    src="${article.imageSrc @ context='uri'}"
                                    alt="${article.title}"
                                    onerror="this.onerror=null; this.src='https://placehold.co/400x300/F2F2F2/666?text=Article+Image';"
                            />
                        </div>
                        <div class="article-card-content">
                            <span class="category-label">${article.category}</span>
                            <h3>${article.title @ context='html'}</h3>
                            <p class="card-excerpt">${article.excerpt @ context='html'}</p>
                            <div class="card-meta">
                                <span>${article.author}</span>
                                <span>${article.readTime}</span>
                            </div>
                        </div>
                    </a>
                </sly>
            </div>

        </sly>
    </div>
</section>
```
</TabItem>
<TabItem label="_cq_editConfig.xml">
```xml
<?xml version="1.0" encoding="UTF-8"?>
<jcr:root xmlns:cq="http://www.day.com/jcr/cq/1.0"
          xmlns:jcr="http://www.jcp.org/jcr/1.0"
          xmlns:nt="http://www.jcp.org/jcr/nt/1.0"
          jcr:primaryType="cq:EditConfig">

    <!-- This node defines the text that appears when the component is empty -->
    <cq:emptytext
            jcr:primaryType="nt:unstructured"
            text="Please configure the Article List component or add articles."/>
</jcr:root>
```
</TabItem>
</Tabs>
