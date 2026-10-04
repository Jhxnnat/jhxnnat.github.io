---
title: Links
---

Sometimes I will put a bunch of links here.

{%- for post in collections.links %}
- [{{ post.data.title }}]({{ post.url}})
{%- endfor %}

