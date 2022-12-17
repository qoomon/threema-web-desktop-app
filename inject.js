localStorage.setItem("settings-userInterface", "minimal");

const style = document.createElement('style');
style.textContent = `
:root {
    --default-color: lightgray;
    --default-dim-color: gray;
}

#main-wrapper > header {
    margin: 2rem;
}

#navigation-conversations .conversation-wrapper .conversation.unread,
#navigation-conversations .conversation-wrapper .conversation.starred {
    border-image: unset !important;
}

.my-identity {
    visibility: hidden;
}

@media (prefers-color-scheme: dark) {
	body {
		color: lightgray;
	}

    #welcome .password-entry input{
        color: var(--default-color);
        border-color: var(--default-dim-color);
    }

    #welcome .password-entry input::placeholder {
        color: var(--default-dim-color);
    }

	#main {
		background-color: #11181d;
	}

	#background-image {
		filter: brightness(0.3);
	}

    #messenger #detail>div.ng-scope {
        background-color: #11181d;
    }

	.material-icons,
	.material-icons.md-light,
	.material-icons.md-dark,
	md-icon.md-threema-theme,
	.md-button.md-icon-button.header-back-button md-icon.md-threema-theme {
		color: var(--default-color);
	}

	.material-icons.md-medium-dark {
		color: var(--default-dim-color);
	}

	md-icon > img,
	.message-icon {
		filter: invert(0.9);
	}

	.avatar.avatar-low>img {
		background: unset;
	}

	#navigation-topheader,
	#detail .detail-header,
	md-card.md-threema-theme,
	md-menu-content.md-threema-theme {
		background-color: hwb(206deg 8% 86%) !important;
		color: var(--default-color);
	}

	md-menu-content.md-threema-theme md-menu-item md-icon,
	md-menu-content.md-threema-theme button.md-button {
		color: var(--default-color);
	}

	#navigation,
	#navigation-header,
	#navigation-conversations {
		background-color: #11181d !important;
	}

	#navigation {
		border-right-width: 2px !important;
		border-color: #32383D !important;
	}

	#navigation-conversations .conversation-wrapper {
		border-color: #32383D !important;
	}

	#navigation-conversations .conversation-wrapper .conversation {
		border-color: #151C21 !important;
	}

	#navigation-conversations .conversation-wrapper .conversation .conversation-box .receiver-box span {
		color: var(--default-color);
	}

	#navigation-conversations .conversation-wrapper .conversation .conversation-box .message-box span {
		color: var(--default-dim-color);
	}

	#navigation-conversations .conversation-wrapper .conversation.active {
		background-color: #0e1418 ;
		border-color: #0e1418 !important;
	}

	#navigation-conversations .conversation-wrapper .conversation:hover {
		background-color: #2E3134 !important;
		border-color: #2E3134 !important;
	}

    #navigation-conversations .badge.unread-count {
        z-index: 1;
    }

	#navigation-contacts .contact {
		border-left: unset !important;
		border-color: #32383d !important;
	}

	#conversation {
		background-blend-mode: overlay !important;
		background-color: #0E1418 !important;
	}

	#conversation .conversation-header-details-detail {
		color: var(--default-dim-color);
	}


	#conversation-chat .chat .message-out .message-body,
	#conversation-chat .chat .message-out .bubble-triangle::before,
	#conversation-chat .chat .message-out .bubble-triangle::after {
		background-color: #0b3232;
	}

	#conversation-chat .chat .message-in .message-body,
	#conversation-chat .chat .message-in .bubble-triangle::before,
	#conversation-chat .chat .message-in .bubble-triangle::after {
		background-color: #141d24;
	}

	#conversation-chat .chat .message-body .message-info {
		color: var(--default-dim-color);
	}

	#conversation-chat .chat .message-info .material-icons.md-dark {
		color: #00baff !important;
	}

	#conversation-footer {
		background-color: #141d24 !important;
	}

	#navigation-header .search input[type='search'],
	#conversation-footer .chat-input compose-area>div:first-child>div:nth-of-type(2) {
		border-color: #172027;
		background-color: #0e1418;
		color: unset;
		outline: none;
	}

	#conversation-footer .chat-input compose-area>div:first-child>div:nth-of-type(2) .compose:empty::before {
		color: var(--default-dim-color);
	}

	#scrolljump > svg > g > g > g > g {
		fill: #141d24;
	}
	#scrolljump>svg>g>g>g>path:nth-child(2) {
		fill: var(--default-dim-color);
	}

	#navigation-fab button {
		filter: saturate(0.7);
	}

	#conversation-chat a:link,
	#conversation-chat a:visited {
		color: #00bbff;
	}

	::-webkit-scrollbar {
		border: unset;
		background-color: unset;
	}

	::-webkit-scrollbar-thumb {
		background-color: #333739;
    }
}
`
document.head.appendChild(style);