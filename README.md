# dynamic-grid

## Dynamic Grid - Using web components

### Please use local http-server or live-server from VS code to serve html files from demo folder

### Features in the grid

- Dynamic grid creation based on `rowData` and `columnDefs`
- Custom cell renderers
- Filtering
- Sorting
- Reorder
- Pagination
- Direction (LTR/RTL)


### 3 ways to use the grid

1. Using instance

```javscript
const grid = new DynamicGrid({
	page: 1,
	perPage: 10,
	sort: true,
	filter: true,
	reorder: true,
	dir: "ltr",
	rowData: JSON.stringify(rowData),
	columnDefs: JSON.stringify(columnDefs),
	debug: true
});
document.body.appendChild(grid);
```

2. Using DOM

```javascript
const grid = document.createElement("dynamic-grid");
grid.dataset.rowData = JSON.stringify(rowData);
grid.dataset.columnDefs = JSON.stringify(columnDefs);
document.body.appendChild(grid);
```

3. Using html

```html
 <dynamic-grid 
	data-per-page="20" 
	data-page="2"
	data-filter="true"
	data-sort="true"
	data-reorder="true"
	data-debug="true"
	data-dir="ltr">
</dynamic-grid>
```


