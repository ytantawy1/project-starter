

import { toElement } from './../utils/toElement';

function toDoItemTemplate (todo) {
    const template = `
    <section class="bg-zinc-600 border-l-4 border-red-60 shadow-sm p-4">
    ${todo}
</section>
    `;

    return toElement(template);
}


export {toDoItemTemplate}