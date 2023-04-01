"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SexsController = void 0;
const common_1 = require("@nestjs/common");
const sexs_service_1 = require("./sexs.service");
const create_sex_dto_1 = require("./dto/create-sex.dto");
const update_sex_dto_1 = require("./dto/update-sex.dto");
let SexsController = class SexsController {
    constructor(sexsService) {
        this.sexsService = sexsService;
    }
    async create(createSexDto) {
        return this.sexsService.create(createSexDto);
    }
    findAll() {
        return this.sexsService.findAll();
    }
    findOne(id) {
        return this.sexsService.findOne(id);
    }
    async update(id, updateSexDto) {
        await this.sexsService.update(id, updateSexDto);
    }
    async remove(id) {
        await this.sexsService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_sex_dto_1.CreateSexDto]),
    __metadata("design:returntype", Promise)
], SexsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SexsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SexsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_sex_dto_1.UpdateSexDto]),
    __metadata("design:returntype", Promise)
], SexsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SexsController.prototype, "remove", null);
SexsController = __decorate([
    (0, common_1.Controller)('sex'),
    __metadata("design:paramtypes", [sexs_service_1.SexsService])
], SexsController);
exports.SexsController = SexsController;
//# sourceMappingURL=sexs.controller.js.map