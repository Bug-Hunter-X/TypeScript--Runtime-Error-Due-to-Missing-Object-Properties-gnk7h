function printCoord(pt: { x: number; y?: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + (pt.y ?? 0)); // Use optional chaining and nullish coalescing
}

printCoord({ x: 3, y: 7 });
printCoord({ x: 3 }); // This will now work without error