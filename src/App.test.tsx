import React from 'react';
import {render, fireEvent, waitForElement} from '@testing-library/react';
import App from './App';

describe('Test routing', () => {
    beforeEach(() => {
        delete window.location;
        //@ts-ignore
        window.location = new URL('http://localhost/');
    });

    test('Verify home page content', () => {
        const {container} = render(<App/>);
        const pageHeaderContent = container.querySelector("#pageHeader")
            ?.firstChild
            ?.textContent;
        expect(pageHeaderContent).toMatch('Home page');
    });

    test('Navigate to news', async () => {
        console.log(document.location.href);
        const {container} = render(<App/>);

        const pageHeaderContent = container.querySelector("#pageHeader")
            ?.firstChild
            ?.textContent;
        expect(pageHeaderContent).toMatch('Home page');

        const linkToNewsElement: Element = (container.querySelector('#linkToNews') as Element);
        fireEvent.click(linkToNewsElement);
        const pageHeaderContentAfterClick = await waitForElement(() => container.querySelector('#pageHeader')?.firstChild?.textContent);
        expect(pageHeaderContentAfterClick).toMatch('News page');
    });

    test('Navigate to about', async () => {
        console.log(document.location.href);
        const {container} = render(<App/>);

        const pageHeaderContent = await waitForElement(() => container.querySelector("#pageHeader")?.firstChild?.textContent);
        expect(pageHeaderContent).toMatch('Home page');

        const linkToAboutElement: Element = (container.querySelector('#linkToAbout') as Element);
        fireEvent.click(linkToAboutElement);
        const pageHeaderContentAfterClick = await waitForElement(() => container.querySelector('#pageHeader')?.firstChild?.textContent);
        expect(pageHeaderContentAfterClick).toMatch('About page');
    });
});
