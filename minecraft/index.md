---
title: Minecraft
layout: index-layout.njk
---

## {{title}} Post

{%- for post in collections.minecraft %}
- [{{ post.data.title }}]({{ post.url}})
{%- endfor %}

