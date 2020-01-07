using System;
using System.Collections.Generic;

namespace Stack_Class
{
    public class Stack
    {
        private readonly List<object> _itemList;

        public Stack()
        {
            this._itemList = new List<object>();
        }

        public void Push(object item)
        {
            var element = (object) item;
            if ( element!= null)
            {
                this._itemList.Add(element);
            }
            else
                throw new ArgumentNullException();
        }

        public object Pop()
        {
            var length = this._itemList.Count;

            if (length > 0)
            {
                object item = (object) this._itemList[length - 1];
                this._itemList.RemoveAt(length - 1);
                return item;
            }
            else
                throw new InvalidOperationException();
        }
    }
}