import React from "react";
import search from "../../public/assets/search.svg";
import newicon from "../../public/assets/icon_new.svg";
import divider from "../../public/assets/divider.svg";
import mark from "../../public/assets/mark.png";
import plus from "../../public/assets/plus.svg";

const Overview = () => {
  return (
    <div className="ml-[30px]">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-bold text-xl cursor-pointer">Overview</p>
        </div>
        <div className="flex items-center">
          <img className="cursor-pointer" src={search} alt="search-img" />
          <img
            className="cursor-pointer pl-[25px]"
            src={newicon}
            alt="newicon-img"
          />
          <img className="pl-[33px]" src={divider} alt="divider-img" />
          <p className="pl-[33px]">Jones Ferdinand</p>
          <img className="cursor-pointer" src={mark} alt="mark-img" />
        </div>
      </div>

      <div className="flex gap-5 mt-[58px]">
        <div className="bg-white hover:text-[#3751FF] hover:border-[#3751FF] w-[240px] border px-[32px] text-center py-[24px] rounded-md">
          <p className="text-[#9FA2B4] font-semibold text-lg">Unresolved</p>
          <p className="text-3xl font-semibold">60</p>
        </div>
        <div className="bg-white hover:text-[#3751FF] hover:border-[#3751FF] w-[240px] border px-[32px] text-center py-[24px] rounded-md">
          <p className="text-[#9FA2B4] font-semibold text-lg">Overdue</p>
          <p className="text-3xl font-semibold">16</p>
        </div>
        <div className="bg-white hover:text-[#3751FF] hover:border-[#3751FF] w-[240px] border px-[32px] text-center py-[24px] rounded-md">
          <p className="text-[#9FA2B4] font-semibold text-lg">Open</p>
          <p className="text-3xl font-semibold">43</p>
        </div>
        <div className="bg-white hover:text-[#3751FF] hover:border-[#3751FF] w-[240px] border px-[32px] text-center py-[24px] rounded-md">
          <p className="text-[#9FA2B4] font-semibold text-lg">On hold</p>
          <p className="text-3xl font-semibold">64</p>
        </div>
      </div>

      <div className="flex justify-between bg-white rounded border mt-[30px]">
        <div className="pt-[32px] pl-[32px]">
          <h3 className="font-bold text-xl cursor-pointer">Today’s trends</h3>
          <p className="text-[#9FA2B4] pt-[8px]">as of 25 May 2019, 09:41 PM</p>
        </div>
        <div className="pt-[64px] flex">
          <hr className="w-[16px] border-blue-700 mt-3 rounded border" />
          <p className="text-[#9FA2B4] pl-[8px]">Today</p>
          <hr className="ml-[32px] w-[16px] border-[#DFE0EB] rounded border mt-3" />
          <p className="text-[#9FA2B4] pl-[8px]">Yesterday</p>
        </div>
        <div>
          <div className="w-[340px] border py-[24px] px-[32px]">
            <p className="text-[#9FA2B4] ">Resolved</p>
            <p className="font-bold text-2xl">449</p>
          </div>
          <div className="w-[340px] border py-[24px] px-[32px]">
            <p className="text-[#9FA2B4] ">Received</p>
            <p className="font-bold text-2xl">426</p>
          </div>
          <div className="w-[340px] border py-[24px] px-[32px]">
            <p className="text-[#9FA2B4] ">Average first response time</p>
            <p className="font-bold text-2xl">33m</p>
          </div>
          <div className="w-[340px] border py-[24px] px-[32px]">
            <p className="text-[#9FA2B4] ">Average response time</p>
            <p className="font-bold text-2xl">3h 8m</p>
          </div>
          <div className="w-[340px] border py-[24px] px-[32px]">
            <p className="text-[#9FA2B4] ">Resolution within SLA</p>
            <p className="font-bold text-2xl">94%</p>
          </div>
        </div>
      </div>
      <div className="flex gap-9">
        <div className="w-[500px] border mt-[30px] pt-[32px] rounded">
          <div className="flex justify-between px-[32px]">
            <div>
              <h3 className="font-bold text-xl cursor-pointer">
                Unresolved tickets
              </h3>
              <span className="text-[#9FA2B4]">Group:</span>
              <span className="pt-[8px]">Support</span>
            </div>
            <div>
              <p className="text-[#3751FF]">View details</p>
            </div>
          </div>
          <div className="flex justify-between py-[18px] border-b mt-[16px] px-[32px]">
            <p>Waiting on Feature Request</p>
            <p>4238</p>
          </div>
          <div className="flex justify-between py-[18px] border-b mt-[16px] px-[32px]">
            <p>Awaiting Customer Response</p>
            <p>1005</p>
          </div>
          <div className="flex justify-between py-[18px] border-b mt-[16px] px-[32px]">
            <p>Awaiting Developer Fix</p>
            <p>914</p>
          </div>
          <div className="flex justify-between py-[18px] border-b mt-[16px] px-[32px]">
            <p>Pending</p>
            <p>281</p>
          </div>
        </div>

        <div className="w-[500px] border mt-[30px] pt-[32px] rounded">
          <div className="flex justify-between px-[32px]">
            <div>
              <h3 className="font-bold text-xl cursor-pointer">Tasks</h3>
              <span className="text-[#9FA2B4]">Today</span>
            </div>
            <div>
              <p className="text-[#3751FF]">View details</p>
            </div>
          </div>
          <div className="flex justify-between py-[18px] border-b mt-[16px] px-[32px]">
            <p className="text-[#9FA2B4] font-semibold">Create new task</p>
            <img src={plus} alt="plus-img" />
          </div>
          <div className="flex justify-between py-[13px] border-b mt-[16px] px-[32px]">
            <p>Finish ticket update</p>
            <p className="py-[5px] px-[12px] text-white rounded-[8px] bg-[#FEC400]">URGENT</p>
          </div>
          <div className="flex justify-between py-[13px] border-b mt-[16px] px-[32px]">
            <p>Create new ticket example</p>
            <p className="py-[5px] px-[12px] text-white bg-[#29CC97] rounded-[8px]">NEW</p>
          </div>
          <div className="flex justify-between py-[13px] border-b mt-[16px] px-[32px]">
            <p>Update ticket report</p>
            <p className="py-[5px] px-[12px] text-[#9FA2B4] bg-slate-200 rounded-[8px]">DEFAULT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
