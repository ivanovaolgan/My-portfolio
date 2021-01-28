<head>
	<meta charset="UTF-8">
	<title>My Portfolio</title>
	<link rel="alternate" type="application/rss+xml" title="My Portfolio" href="/rss/posts">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<template name="header">
	<div class="navbar navbar-default" role="navigation">
		<div class="navbar-header">
			<a href="/" class="navbar-brand">Portfolio</a>
		</div>
		<div class="navbar-collapse collapse">
			<ul class="nav navbar-nav navbar-left">
				<li>
					<a href="/projects">Projects</a>
				</li>
				<li>
					<a href="/blog">Blog</a>
				</li>
				<li>
					<a href="/admin/blog">Admin</a>
				</li>
			</ul>
			<ul class="nav navbar-nav navbar-right">
				{{> loginButtons}}
			</ul>
		</div>
	</div>
</template>
