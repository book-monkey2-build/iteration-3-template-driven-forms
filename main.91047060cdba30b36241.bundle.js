webpackJsonp([0,3],{150:function(t,e,n){"use strict";var i=n(0),o=n(307),r=n(678),a=(n.n(r),n(679)),s=(n.n(a),n(215));n.d(e,"a",function(){return l});var c=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},u=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},l=function(){function t(t){this.http=t,this.api="https://book-monkey2-api.angular-buch.com",this.headers=new o.a,this.headers.append("Content-Type","application/json")}return t.prototype.getAll=function(){return this.http.get(this.api+"/books").retry(3).map(function(t){return t.json()}).map(function(t){return t.map(function(t){return s.a.fromObject(t)})})},t.prototype.getSingle=function(t){return this.http.get(this.api+"/book/"+t).retry(3).map(function(t){return t.json()}).map(function(t){return s.a.fromObject(t)})},t.prototype.create=function(t){return this.http.post(this.api+"/book",JSON.stringify(t),{headers:this.headers})},t.prototype.update=function(t){return this.http.put(this.api+"/book/"+t.isbn,JSON.stringify(t),{headers:this.headers})},t.prototype.remove=function(t){return this.http.delete(this.api+"/book/"+t)},t=c([n.i(i.Injectable)(),u("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.b&&o.b)&&e||Object])],t);var e}()},215:function(t,e,n){"use strict";var i=n(336);n.d(e,"a",function(){return o});var o=function(){function t(){}return t.empty=function(){return new i.a("","",[""],new Date,"",0,[{url:"",title:""}],"")},t.fromObject=function(t){return new i.a(t.isbn,t.title,t.authors,"string"==typeof t.published?new Date(t.published):t.published,t.subtitle,t.rating,t.thumbnails,t.description)},t}()},331:function(t,e,n){"use strict";var i=n(0);n.d(e,"a",function(){return a});var o=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(){}return t=o([n.i(i.Component)({selector:"bm-root",template:n(670)}),r("design:paramtypes",[])],t)}()},332:function(t,e,n){"use strict";var i=n(0),o=n(325),r=n(215),a=n(150);n.d(e,"a",function(){return u});var s=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},u=function(){function t(t,e,n){this.bs=t,this.router=e,this.route=n,this.book=r.a.empty()}return t.prototype.ngOnInit=function(){var t=this,e=this.route.snapshot.params;this.bs.getSingle(e.isbn).subscribe(function(e){return t.book=e})},t.prototype.getRating=function(t){return new Array(t)},t.prototype.removeBook=function(){var t=this;confirm("Buch wirklich löschen?")&&this.bs.remove(this.book.isbn).subscribe(function(e){return t.router.navigate(["../"],{relativeTo:t.route})})},t=s([n.i(i.Component)({selector:"bm-book-details",template:n(671)}),c("design:paramtypes",["function"==typeof(e="undefined"!=typeof a.a&&a.a)&&e||Object,"function"==typeof(u="undefined"!=typeof o.a&&o.a)&&u||Object,"function"==typeof(l="undefined"!=typeof o.b&&o.b)&&l||Object])],t);var e,u,l}()},333:function(t,e,n){"use strict";var i=n(0),o=n(194),r=n(215),a=n(150),s=n(511);n.d(e,"a",function(){return l});var c=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},u=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},l=function(){function t(t){this.bs=t,this.book=r.a.empty(),this.errors={}}return t.prototype.ngOnInit=function(){var t=this;this.myForm.valueChanges.subscribe(function(){return t.updateErrorMessages()})},t.prototype.submitForm=function(){var t=this;this.book.authors=this.myForm.value.authors.split(","),this.book.thumbnails=[this.myForm.value.thumbnail];var e=r.a.fromObject(this.book);this.bs.create(e).subscribe(function(e){t.myForm.reset()})},t.prototype.updateErrorMessages=function(){this.errors={};for(var t=0,e=s.a;t<e.length;t++){var n=e[t],i=this.myForm.form.get(n.forControl);i&&i.dirty&&i.invalid&&i.errors[n.forValidator]&&!this.errors[n.forControl]&&(this.errors[n.forControl]=n.text)}},c([n.i(i.ViewChild)("myForm"),u("design:type","function"==typeof(e="undefined"!=typeof o.NgForm&&o.NgForm)&&e||Object)],t.prototype,"myForm",void 0),t=c([n.i(i.Component)({selector:"bm-book-form",template:n(672)}),u("design:paramtypes",["function"==typeof(l="undefined"!=typeof a.a&&a.a)&&l||Object])],t);var e,l}()},334:function(t,e,n){"use strict";var i=n(0),o=n(150);n.d(e,"a",function(){return s});var r=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t){this.bs=t}return t.prototype.ngOnInit=function(){var t=this;this.bs.getAll().subscribe(function(e){return t.books=e})},t=r([n.i(i.Component)({selector:"bm-book-list",template:n(674)}),a("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.a&&o.a)&&e||Object])],t);var e}()},335:function(t,e,n){"use strict";var i=n(0);n.d(e,"a",function(){return a});var o=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(){}return t=o([n.i(i.Component)({selector:"bm-home",template:'\n  <div class="ui container">\n    <h1>Home</h1>\n    <p>Das ist der BookMonkey.</p>\n    <a routerLink="../books" class="ui red button">\n      Buchliste ansehen\n      <i class="right arrow icon"></i>\n    </a>\n  </div>\n  '}),r("design:paramtypes",[])],t)}()},336:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i=function(){function t(t,e,n,i,o,r,a,s){this.isbn=t,this.title=e,this.authors=n,this.published=i,this.subtitle=o,this.rating=r,this.thumbnails=a,this.description=s}return t}()},392:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=392},393:function(t,e,n){"use strict";var i=n(515),o=(n.n(i),n(480)),r=n(0),a=n(514),s=n(513);a.a.production&&n.i(r.enableProdMode)(),n.i(o.a)().bootstrapModule(s.a)},509:function(t,e,n){"use strict";var i=n(0),o=n(325),r=n(335),a=n(334),s=n(332),c=n(333);n.d(e,"a",function(){return d});var u=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},l=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},f=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:r.a},{path:"books",component:a.a},{path:"books/:isbn",component:s.a},{path:"admin",component:c.a}],d=function(){function t(){}return t=u([n.i(i.NgModule)({imports:[o.c.forRoot(f)],exports:[o.c],providers:[]}),l("design:paramtypes",[])],t)}()},510:function(t,e,n){"use strict";var i=n(147),o=n(194),r=n(307),a=n(0),s=n(331),c=n(335),u=n(334),l=n(512),f=n(332),d=n(333),p=n(150),h=n(509),b=n(516);n.n(b);n.d(e,"a",function(){return g});var m=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},v=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},g=function(){function t(){}return t=m([n.i(a.NgModule)({declarations:[s.a,c.a,u.a,l.a,f.a,d.a],imports:[i.b,o.FormsModule,r.c,h.a,b.DateValueAccessorModule],providers:[p.a],bootstrap:[s.a]}),v("design:paramtypes",[])],t)}()},511:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var i=function(){function t(t,e,n){this.forControl=t,this.forValidator=e,this.text=n}return t}(),o=[new i("title","required","Ein Buchtitel muss angegeben werden"),new i("isbn","required","Es muss eine ISBN angegeben werden"),new i("isbn","minlength","Die ISBN muss mindestens 10 Zeichen enthalten"),new i("isbn","maxlength","Eine ISBN darf höchstens 13 Zeichen haben"),new i("published","required","Es muss ein Erscheinungsdatum angegeben werden"),new i("authors","required","Es muss ein Autor angegeben werden")]},512:function(t,e,n){"use strict";var i=n(0),o=n(336);n.d(e,"a",function(){return s});var r=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(){}return r([n.i(i.Input)(),a("design:type","function"==typeof(e="undefined"!=typeof o.a&&o.a)&&e||Object)],t.prototype,"book",void 0),t=r([n.i(i.Component)({selector:"a.bm-book-list-item",template:n(673)}),a("design:paramtypes",[])],t);var e}()},513:function(t,e,n){"use strict";var i=(n(331),n(510));n.d(e,"a",function(){return i.a})},514:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i={production:!0}},515:function(t,e,n){"use strict";var i=n(531),o=(n.n(i),n(524)),r=(n.n(o),n(520)),a=(n.n(r),n(526)),s=(n.n(a),n(525)),c=(n.n(s),n(523)),u=(n.n(c),n(522)),l=(n.n(u),n(530)),f=(n.n(l),n(519)),d=(n.n(f),n(518)),p=(n.n(d),n(528)),h=(n.n(p),n(521)),b=(n.n(h),n(529)),m=(n.n(b),n(527)),v=(n.n(m),n(532)),g=(n.n(v),n(697));n.n(g)},670:function(t,e){t.exports='<div class="ui three item tabs menu">\n  <a routerLink="home"  routerLinkActive="active" class="item">Home</a>\n  <a routerLink="books" routerLinkActive="active" class="item">Bücher</a>\n  <a routerLink="admin" routerLinkActive="active" class="item">Administration</a>\n</div>\n<router-outlet></router-outlet>\n'},671:function(t,e){t.exports='<div class="ui grid" *ngIf="book">\n  <div class="four wide column">\n    <img class="ui large image" [src]="book?.thumbnails && book?.thumbnails[0].url">\n  </div>\n  <div class="twelve wide column">\n    <h1 class="ui header">{{ book?.title }}</h1>\n    <h3 class="ui header">{{ book?.subtitle }}</h3>\n    <div class="ui divider"></div>\n    <div class="ui grid">\n      <div class="four wide column">\n        <h4 class="ui header">Autoren</h4>\n        <span *ngFor="let author of book?.authors; let l=last">\n          {{ author }}<span *ngIf="!l">, </span>\n        </span>\n      </div>\n      <div class="four wide column">\n        <h4 class="ui header">ISBN</h4>\n        {{ book?.isbn }}\n      </div>\n      <div class="four wide column">\n        <h4 class="ui header">Erschienen</h4>\n        {{ book?.published }}\n      </div>\n      <div class="four wide column">\n        <h4 class="ui header">Rating</h4>\n        <i *ngFor="let r of getRating(book?.rating)" class="yellow star icon"></i>\n      </div>\n    </div>\n  </div>\n  <div class="sixteen wide column">\n    <h3 class="ui header">Beschreibung</h3>\n    {{ book?.description }}\n  </div>\n  <div class="sixteen wide column">\n    <div class="ui small images">\n      <img *ngFor="let thumbnail of book?.thumbnails" [src]="thumbnail.url">\n    </div>\n  </div>\n</div>\n\n<button class="ui tiny red labeled icon button"\n        (click)="removeBook()">\n  <i class="remove icon"></i> Buch löschen\n</button>\n'},672:function(t,e){t.exports='<h1>Buchformular</h1>\n<form novalidate\n       class="ui large form"\n       #myForm="ngForm"\n       (ngSubmit)="submitForm()">\n\n  <div class="field">\n    <label>Buchtitel</label>\n    <input\n      name="title"\n      [(ngModel)]="book.title"\n      required>\n    <div *ngIf="errors.title" class="ui negative message">\n      {{ errors.title }}\n    </div>\n  </div>\n  <div class="field">\n    <label>Untertitel</label>\n    <input\n      name="subtitle"\n      [(ngModel)]="book.subtitle">\n  </div>\n  <div class="field">\n    <label>ISBN-Nummer</label>\n    <input\n      name="isbn"\n      [(ngModel)]="book.isbn"\n      required\n      minlength="10"\n      maxlength="13">\n    <div *ngIf="errors.isbn" class="ui negative message">\n      {{ errors.isbn }}\n    </div>\n  </div>\n  <div class="field">\n    <label>Erscheinungsdatum</label>\n    <input\n      type="date"\n      name="published"\n      [(ngModel)]="book.published"\n      useValueAsDate\n      required>\n    <div *ngIf="errors.published" class="ui negative message">\n      {{ errors.published }}\n    </div>\n  </div>\n  <div class="field">\n    <label>Autor</label>\n    <input\n      name="authors"\n      [(ngModel)]="book.authors[0]"\n      required>\n    <div *ngIf="errors.authors" class="ui negative message">\n      {{ errors.authors }}\n    </div>\n  </div>\n  <div class="field">\n    <label>Beschreibung</label>\n    <textarea\n      name="description"\n      [(ngModel)]="book.description"\n      rows="3"></textarea>\n  </div>\n  <div class="field">\n    <label>Bild</label>\n    <div class="two fields" ngModelGroup="thumbnail">\n      <div class="field">\n        <input\n          name="url"\n          [(ngModel)]="book.thumbnails[0].url"\n          placeholder="http://beispiel/img.jpg">\n      </div>\n      <div class="field">\n        <input\n          name="title"\n          [(ngModel)]="book.thumbnails[0].title"\n          placeholder="Titel">\n      </div>\n    </div>\n  </div>\n\n  <button type="submit" class="ui button" [disabled]="myForm.invalid">Speichern</button>\n</form>\n'},673:function(t,e){t.exports='<img class="ui tiny image"\n     *ngIf="book.thumbnails"\n     [src]="book.thumbnails[0].url">\n<div class="content">\n  <div class="header">{{ book?.title }}</div>\n  <div class="description"> {{ book?.subtitle }} </div>\n  <div class="metadata">\n    <span *ngFor="let author of book.authors; let l=last">\n      {{ author }}<span *ngIf="!l">, </span>\n    </span>\n  </div>\n  <div class="extra">ISBN {{ book?.isbn }}</div>\n</div>\n'},674:function(t,e){t.exports='<div class="ui middle aligned selection divided list">\n  <a class="bm-book-list-item item"\n      *ngFor="let b of books"\n      [book]="b"\n      [routerLink]="b.isbn"></a>\n</div>\n'},698:function(t,e,n){t.exports=n(393)}},[698]);
//# sourceMappingURL=main.91047060cdba30b36241.bundle.map