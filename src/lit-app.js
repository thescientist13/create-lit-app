import { LitElement, html } from '@polymer/lit-element/';

import { Router } from '@vaadin/router';

import '@polymer/paper-button/paper-button';

import './components/home-page';
import './components/books-demo';
import './components/redux-demo';
import './components/not-found';

import polymerLogo from './assets/logo.svg';
import githubLogo from './assets/github.svg';
import { AppStyles } from './styles/AppStyles';

class LitApp extends LitElement {

	_firstRendered(){
		const router = new Router(this.shadowRoot.querySelector('#outlet'));

		router.setRoutes([
			{path: '/', component: 'home-page'},
			{path: '/books', component: 'books-demo'},
			{path: '/redux', component: 'redux-demo'},
			{path: '(.*)', component: 'not-found'}
		]);
	}

	_render() {
		return html`
			${AppStyles}
			<div class="app">
				<header class="app-header">
					<img src="${polymerLogo}" class="app-logo" alt="logo" />
					<h1 class="app-title">Welcome to Create Lit App</h1>
				</header>

				<div class="app-links">
					<a href="/">Home</a>
					<a href="/books">Books</a>
					<a href="/redux">Redux</a>
				</div>

				<div id="outlet"></div>

				<a href="https://github.com/thepassle/create-lit-app">
					<img src="${githubLogo}" class="app-gh" alt />
				</a>
			</div>
		`;
	}
}

customElements.define('lit-app', LitApp);