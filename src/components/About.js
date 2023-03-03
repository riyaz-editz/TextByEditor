import React from 'react'

export default function about() {
  return (
<>

<div className="row">
  <div className="col-4">
    <div id="list-example" className="list-group">
      <a className="list-group-item list-group-item-action" href="#list-item-1">Item 1</a>
      <a className="list-group-item list-group-item-action" href="#list-item-2">Item 2</a>
      <a className="list-group-item list-group-item-action" href="#list-item-3">Item 3</a>
      <a className="list-group-item list-group-item-action" href="#list-item-4">Item 4</a>
    </div>
  </div>
  <div className="col-8">
    <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" className="scrollspy-example" tabindex="0">
      <h4 id="list-item-1">Item 1</h4>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet magnam nostrum quod deserunt omnis, temporibus ad consequuntur quisquam, nesciunt unde sequi eligendi ullam?</p>
      <h4 id="list-item-2">Item 2</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, nisi? Blanditiis esse maiores rem expedita molestias, quisquam, facere aspernatur placeat iste inventore aperiam.</p>
      <h4 id="list-item-3">Item 3</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, nisi? Blanditiis esse maiores rem expedita molestias, quisquam, facere aspernatur placeat iste inventore aperiam.</p>
      <h4 id="list-item-4">Item 4</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, nisi? Blanditiis esse maiores rem expedita molestias, quisquam, facere aspernatur placeat iste inventore aperiam.</p>
    </div>
  </div>
</div>


</>
    )
}
