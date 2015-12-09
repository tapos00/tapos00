angular.module("cart", [])
    .factory("cart", function () {
            var cartData = [];
            return {
                addProduct: function (aproduct) {
                    var addedToExistingItem = false;
                    for (var i = 0; i < cartData.length; i++) {
                        if (cartData[i].ID == aproduct.ID) {
                            cartData[i].count++;
                            addedToExistingItem = true;
                            alert("product update successfully");
                            break;
                        }
                    }
                    if(!addedToExistingItem){
                        aproduct.count = 1;
                        cartData.push(aproduct);
                        alert("product insert successfully");
                    }

                },
                removeProduct: function (id) {
                    for (var i = 0; i < cartData.length; i++) {
                        if (cartData[i].ID == id) {
                            cartData.splice(i, 1);
                            break;
                        }
                    }
                },
                getProducts: function () {
                    return cartData;
                }
            };
        }
    ).directive("cartSummary", function (cart) {
    return {
        restrict: "E",
        templateUrl: "partial/cartSummary.html",
        controller: function ($scope) {
            var cartData = cart.getProducts();
            $scope.total = function () {
                var total = 0;
                for (var i = 0; i < cartData.length; i++) {
                    total += (cartData[i].Price * cartData[i].count);
                }
                return total;
            };
            $scope.itemCount = function () {
                var total = 0;
                for (var i = 0; i < cartData.length; i++) {
                    total += cartData[i].count;
                }
                return total;
            };
        }
    };
});


