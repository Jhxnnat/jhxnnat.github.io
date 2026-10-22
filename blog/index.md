---
title: Blogs
layout: index-layout.njk
---

## {{title}} Posts

{%- for post in collections.blog %}
- [{{ post.data.title }}]({{ post.url}})
{%- endfor %}

